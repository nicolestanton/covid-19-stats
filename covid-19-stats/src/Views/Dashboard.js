import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import useFetch from '../Hooks/useFetch'
import Locations from '../Config/Locations'
import Select from 'react-select'

export function Dashboard() {
  const [location, setLocation] = useState('England');

  const url = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`;

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
        <h1>Covid-19 Information</h1>
        <Select options={Locations} onChange={(e) => {
          setLocation(e.value)
        }} />
        <h3>{location}</h3>
        <h3>{data.data[0].date}</h3>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
