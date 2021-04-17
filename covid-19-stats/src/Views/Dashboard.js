import React, { useState, useEffect, Component } from "react";
import useFetch from '../Hooks/useFetch'
import Locations from '../Config/Locations'
import Select from 'react-select'
import Chart from '../Components/Chart'
import { getApiUrl } from '../Utils/api-utils';
import { readableDateFormat } from '../Utils/date-utils';
import DatePicker from '../Components/DatePicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBacteria } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  const [location, setLocation] = useState('England');
  const url = getApiUrl(location);
  const [data, status] = useFetch({ url, shouldExectute: location !== null });

  console.log('data:', data, 'status:', status);

  if (status !== 'SUCCESS') {
    return (
      <div>Loading...</div>
    )
  }

  const todaysData = data.data[0];

  return (
    <React.Fragment>
      <div className="app-container">
        <h1>Covid-19 Information for {location} on {readableDateFormat(todaysData.date)}</h1>
        <div className='stat-overview'>
          <div className='stat'>
            <FontAwesomeIcon icon={faBacteria} className='icon' />
            <h3>New Cases</h3>
            <span> {todaysData.newCases}</span>
          </div>
          <div className='stat'>
            <FontAwesomeIcon icon={faVirus} className='icon' />
            <h3>Total Cases</h3>
            <span> {todaysData.totalCases}</span>
          </div>
        </div>
        <DatePicker />
        <Select className='react-select' options={Locations} onChange={(e) => {
          setLocation(e.value)
        }} />
        <Chart data={data.data} days={7} />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
