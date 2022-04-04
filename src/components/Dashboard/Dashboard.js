import React from 'react';
import InvestmentRevenueChart from '../InvestmentRevenueChart/InvestmentRevenueChart';
import MonthSellChart from '../MonthSellChart/MonthSellChart';

import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className='chart-container'>
            <MonthSellChart />
            <hr />
            <InvestmentRevenueChart />
        </div>
    );
};

export default Dashboard;