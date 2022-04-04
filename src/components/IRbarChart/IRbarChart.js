import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import Spinner from '../Spinner/Spinner';


const IRbarChart = () => {
    const [chartData, , isLoading] = useCharData();

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <h2 style={{ textAlign: 'center' }}>INVESTMENT vs REVENUE</h2>
                    <BarChart
                        width={600}
                        height={300}
                        data={chartData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            }
        </>
    );
};

export default IRbarChart;