import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import './InvestmentRevenueCompare.css';

const SellPerDayChart = () => {
    const [chartData,] = useCharData();

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: '#1b98f5' }}>COMPARING</h2>
            <hr />
            <div className='investment-revenue-container'>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#1b98f5' }}>REVENUE</h2>
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
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>

                </div>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#1b98f5' }}>INVESTMENT</h2>
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
                        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default SellPerDayChart;