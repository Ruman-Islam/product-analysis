import React from 'react';
import InvestmentRevenueChart from '../InvestmentRevenueChart/InvestmentRevenueChart';
import MonthSellChart from '../MonthSellChart/MonthSellChart';
import InvestmentRevenueCompare from '../InvestmentRevenueCompare/InvestmentRevenueCompare';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className='container'>
            <div className='chart-container'>
                <MonthSellChart />
                <hr />
                <InvestmentRevenueChart />
            </div>
            <div className='compare-chart'>
                <InvestmentRevenueCompare />
            </div>
        </div>
    );
};

export default Dashboard;