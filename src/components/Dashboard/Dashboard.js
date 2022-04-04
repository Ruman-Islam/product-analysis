import React from 'react';
import IRbarChart from '../IRbarChart/IRbarChart';
import MonthSellChart from '../MonthSellChart/MonthSellChart';
import IRcompareChart from '../IRcompareChart/IRcompareChart';
import './Dashboard.css';
import IRpieChart from '../IRpieChart/IRpieChart';

const Dashboard = () => {

    return (
        <div>
            <div className='chart-container'>
                <div>
                    <MonthSellChart />
                </div>
                <hr />
                <div>
                    <IRbarChart />
                </div>
            </div>
            <div className='chart-container'>
                <div>
                    <IRcompareChart />
                </div>
                <hr />
                <div>
                    <IRpieChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;