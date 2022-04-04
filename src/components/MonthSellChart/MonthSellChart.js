import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCharData } from '../../hooks/useChartData';

const MonthSellChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: '#1b98f5' }}>MONTH WISE SELL</h2>
            <LineChart
                width={600}
                height={300}
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
        </div>
    );
};

export default MonthSellChart;