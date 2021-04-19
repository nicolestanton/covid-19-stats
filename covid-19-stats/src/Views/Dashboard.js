import React, { useState } from "react";
import useFetch from '../Hooks/useFetch'
import Locations from '../Config/Locations'
import Select from 'react-select'
import Chart from '../Components/Chart'
import { getApiUrl } from '../Utils/api-utils';
import { readableDateFormat, formatDate } from '../Utils/date-utils';
import DatePicker from '../Components/DatePicker'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBacteria } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  const [location, setLocation] = useState('England');
  const todaysDate = new Date()
  const formattedDate = formatDate(todaysDate)
  const [chosenDate, setChosenDate] = useState(formattedDate);
  const url = getApiUrl({ location, chosenDate });
  const [data, status] = useFetch({ url, shouldExectute: location !== null });

  console.log('data:', data, 'status:', status, 'chosenDate', chosenDate, new Date());

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
        <div className='data'>
          <div className='choose-data'>
            <DatePicker
              value={chosenDate}
              onChange={(value) => {
                setChosenDate(value)
              }
              }
            />

            <Select className='react-select' options={Locations} placeholder={location}
              onChange={(e) => {
                setLocation(e.value)
              }} />
          </div>
          <div className='data-chart'>
            <Chart data={data.data} days={7} />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Dashboard;
