import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from '../Hooks/useFetch'

export function Dashboard() {
  // const [data, setData] = useState();
  const [location, setLocation] = useState('liverpool');

  const url = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=${location}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`;

  const [data, status] = useFetch({ url, shouldExectute: location !== null });

  console.log(data, status);

  return (
    <React.Fragment>
      <div className="App-header">
        <h1>Covid-19 Information </h1>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        {/* <button onClick={getData}>Get Api data</button> */}
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
