import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCharData } from '../../hooks/useChartData';

const MonthSellChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>MONTH WISE SELL</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#1b98f5" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="month" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthSellChart;