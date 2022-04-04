import React from 'react';
import { Pie, PieChart } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import Spinner from '../Spinner/Spinner';

const IRpieChart = () => {
    const [chartData, , isLoading] = useCharData();

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <h2 style={{ textAlign: 'center' }}>INVESTMENT VS REVENUE</h2>
                    <PieChart width={400} height={400}>
                        <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </div>
            }
        </>
    );
};

export default IRpieChart;