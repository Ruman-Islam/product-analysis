import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import './InvestmentRevenueCompare.css';

const SellPerDayChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>INVESTMENT VS REVENUE</h2>
            <div className='investment-revenue-container'>
                <div>
                    <h2 style={{ textAlign: 'center' }}>REVENUE</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={chartData}
                            syncId="anyId"
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <hr />
                <div>
                    <h2 style={{ textAlign: 'center' }}>INVESTMENT</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={chartData}
                            syncId="anyId"
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SellPerDayChart;