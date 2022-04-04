import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCharData } from '../../hooks/useChartData';


const InvestmentRevenueChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>INVESTMENT VS REVENUE</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
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
            </ResponsiveContainer>
        </div>
    );
};

export default InvestmentRevenueChart;