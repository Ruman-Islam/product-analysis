import React from 'react';
import InvestmentRevenueChart from '../InvestmentRevenueChart/InvestmentRevenueChart';
import MonthSellChart from '../MonthSellChart/MonthSellChart';
import InvestmentRevenueCompare from '../InvestmentRevenueCompare/InvestmentRevenueCompare';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div>
            <div className='chart-container'>
                <div>
                    <MonthSellChart />
                </div> <hr />
                <div>
                    <InvestmentRevenueChart />
                </div>
            </div>
            <div style={{ fontSize: '12px' }}>
                <InvestmentRevenueCompare />
            </div>
        </div>
    );
};

export default Dashboard;