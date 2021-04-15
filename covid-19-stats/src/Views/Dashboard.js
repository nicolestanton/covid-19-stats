import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import useFetch from '../Hooks/useFetch'
import Locations from '../Config/Locations'
import Select from 'react-select'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBacteria } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  const [location, setLocation] = useState('England');

  const url = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCases":"newCasesByPublishDate","totalCases":"cumCasesByPublishDate","newDeaths":"newDeathsByDeathDate","totalDeaths":"cumDeathsByDeathDate"}`;

  const [data, status] = useFetch({ url, shouldExectute: location !== null });

  console.log('data:', data, 'status:', status);

  if (status !== 'SUCCESS') {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1>Covid-19 Information for {location}</h1>
        <Select className='react-select' options={Locations} onChange={(e) => {
          setLocation(e.value)
        }} />
        <h3>{location}</h3>
        <h3>{data.data[0].date}</h3>
        <FontAwesomeIcon icon={faBacteria} />
        <h3>New Cases:{data.data[0].newCases}</h3>
        <FontAwesomeIcon icon={faVirus} />
        <h3>Total Cases:{data.data[0].totalCases}</h3>



      </div>
    </React.Fragment>
  );
}

export default Dashboard;
