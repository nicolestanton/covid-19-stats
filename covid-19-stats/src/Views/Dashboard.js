import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dashboard() {
  const [data, setData] = useState();
  const [location, setLocation] = useState();
  const url =
    "https://api.coronavirus.data.gov.uk/v1/data?" +
    "filters=areaName=liverpool&" +
    'structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}';

  function getData() {
    const params = {
      areaName: location
    };
    axios
      .get(url, params)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  if (data === null) {
    return <span>Loading...</span>;
  }
  return (
    <React.Fragment>
      <h1>Dashboard</h1>

      <header className="App-header">
        <h1>Covid-19 Information </h1>
        <input
          type="text"
          placeholder="Enter Location"
          onChange={e => setLocation(e.target.value)}
        />
        <button onClick={getData}>Get Api data</button>
      </header>
    </React.Fragment>
  );
}

export default Dashboard;
