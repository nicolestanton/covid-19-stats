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

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  console.log('data:', data, 'status:', status);

  if (status !== 'SUCCESS') {
    return (
      <div>Loading...</div>
    )
  }
  // var month = dateObj.getUTCMonth() + 1; //months from 1-12
  // var day = dateObj.getUTCDate();
  // var year = dateObj.getUTCFullYear();

  // newdate = year + "/" + month + "/" + day;

  const newDate = new Date()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const day = newDate.getDay()
  const monthName = monthNames[month]
  const fullDate = day + ' ' + monthName + ' ' + year


  console.log('DATE:', newDate, 'MONTH', month, 'YEAR', year, 'DAY', day, 'month name', monthName)

  return (
    <React.Fragment>
      <div className="app-container">
        <h1>Covid-19 Information for {location} on {fullDate}</h1>
        <div className='stat-overview'>
          <div className='stat'>
            <FontAwesomeIcon icon={faBacteria} className='icon' />
            <h3>New Cases: {data.data[0].newCases}</h3>
          </div>
          <div className='stat'>
            <FontAwesomeIcon icon={faVirus} className='icon' />
            <h3>Total Cases: {data.data[0].totalCases}</h3>
          </div>
        </div>
        <Select className='react-select' options={Locations} onChange={(e) => {
          setLocation(e.value)
        }} />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
