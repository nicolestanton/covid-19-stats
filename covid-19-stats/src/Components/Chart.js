import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { convertCovidDataToLineChartFormat } from '../Utils/recharts-utils';

export function Chart({ data, days }) {

    const formattedData = convertCovidDataToLineChartFormat(data, days);

    if (formattedData.length === 0) {
        return <div>No data for this chart.</div>
    }

    return (
        <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="newCases" stroke="#82ca9d" />
            <Line type="monotone" dataKey="newDeaths" stroke="#fb74c7" />
            <Line type="monotone" dataKey="newAdmissions" stroke="#8884d8" />
        </LineChart>
    );

}

export default Chart