import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import Spinner from '../Spinner/Spinner';

const IRcompareChart = () => {
    const [chartData, , isLoading] = useCharData();

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <h2 style={{ textAlign: 'center' }}>INVESTMENT VS REVENUE</h2>
                    <AreaChart
                        width={600}
                        height={300}
                        data={chartData}
                        syncId="anyId"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#82CA9D" fill="#82CA9D" />
                    </AreaChart>
                </div>}
        </>
    );
};

export default IRcompareChart;