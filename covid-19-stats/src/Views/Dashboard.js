import React, { useState } from "react";
import useFetch from '../Hooks/useFetch'
import Locations from '../Config/Locations'
import Countries from '../Config/Countries'

import Select from 'react-select'
import Chart from '../Components/Chart'
import { getApiUrl } from '../Utils/api-utils';
import { readableDateFormat, formatDate } from '../Utils/date-utils';
import DatePicker from '../Components/DatePicker'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBacteria } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  const [country, setCountry] = useState('United Kingdom');
  const todaysDate = new Date().toISOString()
  // const formattedDate = formatDate(todaysDate)
  const [chosenDate, setChosenDate] = useState(todaysDate);
  const url = getApiUrl({ country, chosenDate });
  const [data, status] = useFetch({ url, shouldExectute: country !== null });
  //date needs to be in 2021-01-14T00:00:00Z format
  console.log('data:', data, 'status:', status, 'chosenDate', chosenDate, 'country', country);
  console.log('todays date', todaysDate)


  if (status === 'ERROR') {
    return (
      <div>Error</div>
    )
  }

  if (status !== 'SUCCESS') {
    return (
      <div>Loading...</div>
    )
  }

  const apiDate = data[0].Date
  const latestData = data.slice(-1).pop()
  const formattedApiDate = apiDate.split('T', 1)[0]
  console.log('formattedApiDate', formattedApiDate, 'latestData', latestData)



  // const todaysData = latestData;

  return (
    <React.Fragment>
      <div className="app-container">
        <h1>Covid-19 Information for {country} on {readableDateFormat(todaysDate)}</h1>


        <div className='stat-overview'>
          <div className='stat'>
            <FontAwesomeIcon icon={faBacteria} className='icon' />
            <h3>New Cases</h3>
            <span> {latestData.Confirmed}</span>
          </div>
          <div className='stat'>
            <FontAwesomeIcon icon={faVirus} className='icon' />
            <h3>Total Deaths</h3>
            <span> {latestData.Deaths}</span>
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

            <Select className='react-select' options={Countries} placeholder={country}
              onChange={(e) => {
                setCountry(e.value)
              }} />
          </div>
          <div className='data-chart'>
            <Chart data={data.Countries} />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Dashboard;
