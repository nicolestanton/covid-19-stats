import React, { useState } from "react";
import useFetch from '../Hooks/useFetch'
import Countries from '../Config/Countries'
import Select from 'react-select'
import Chart from '../Components/Chart'
import { getApiUrl } from '../Utils/api-utils';
import { readableDateFormat, formatDate } from '../Utils/date-utils';
import DatePicker from '../Components/DatePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacteria } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  const [country, setCountry] = useState('cuba');
  const todaysDate = new Date()
  const endDate = new Date(todaysDate)
  const defaultEndIsoDate = endDate.toISOString()
  const formattedDate = formatDate(todaysDate)
  const todaysIsoDate = todaysDate.toISOString()
  const [chosenEndDate, setChosenEndDate] = useState(todaysIsoDate);
  const [isoEndDate, setIsoEndDate] = useState(defaultEndIsoDate);
  const [chosenStartDate, setChosenStartDate] = useState(formattedDate);
  const [isoStartDate, setIsoStartDate] = useState(defaultEndIsoDate);
  const url = getApiUrl({ country, chosenEndDate, isoEndDate, isoStartDate });
  const [data, status] = useFetch({ url, shouldExectute: country !== null });

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
  const startDateFromDatePicker = new Date(chosenStartDate)
  const isoStartDateFromDatePicker = startDateFromDatePicker.toISOString()

  console.log(isoStartDate)
  return (
    <React.Fragment>
      <div className="app-container">
        <h1>Covid-19 Information for {country} on {readableDateFormat(chosenStartDate)}</h1>
        <div className='stat-overview'>
          <div className='stat'>
            <FontAwesomeIcon icon={faBacteria} className='icon' />
            <h3>New Cases</h3>
            <span> {data[0].Cases}</span>
          </div>
        </div>
        <div className='data'>
          <div className='choose-data'>
            <DatePicker
              id={'date from'}
              label={'Date from'}
              value={'formattedStartDate'}
              onChange={(value) => {
                setChosenStartDate(value)
                setIsoStartDate(isoStartDateFromDatePicker)
              }
              }
            />
            <Select className='react-select' options={Countries} placeholder={country}
              onChange={(e) => {
                setCountry(e.value)
              }} />
          </div>
          <div className='data-chart' testid={'line-chart'}>

            <Chart data={data} numberOfDays={10} />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Dashboard;
