import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCharData } from '../../hooks/useChartData';


const InvestmentRevenueChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: '#1b98f5' }}>INVESTMENT VS REVENUE</h2>
            <BarChart
                style={{ margin: '10px 10px' }}
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
    );
};

export default InvestmentRevenueChart;