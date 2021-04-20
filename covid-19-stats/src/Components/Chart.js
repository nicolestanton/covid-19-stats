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
            <Line type="monotone" dataKey="Cases" stroke="#82ca9d" />
        </LineChart>
    );

}

export default Chart