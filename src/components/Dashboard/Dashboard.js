import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie } from 'recharts';
import { useCharData } from '../../hooks/useChartData';
import Spinner from '../Spinner/Spinner';
import './Dashboard.css';

const Dashboard = () => {
    const [chartData, , isLoading] = useCharData();
    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div className="rechart-container">
                    <div>
                        <h2 style={{ textAlign: 'center', marginTop: '60px' }}>MONTH WISE SELL</h2>
                        <ResponsiveContainer
                            width="90%"
                            aspect={2}
                        >
                            <LineChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Investment VS Revenue</h2>
                        <ResponsiveContainer
                            width="90%"
                            aspect={2}
                        >
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
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
                    <div>
                        <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Investment VS Revenue</h2>
                        <ResponsiveContainer
                            width="90%"
                            aspect={2}
                        >
                            <AreaChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="revenue" stroke="#82CA9D" fill="#82CA9D" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Investment VS Revenue</h2>
                        <ResponsiveContainer
                            width="90%" height={250}
                        >
                            <PieChart
                                margin={{ top: 20, right: 30, left: 90, bottom: 0 }}
                            >
                                <Tooltip />
                                <Legend />
                                <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                <Pie data={chartData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            }
        </>
    );
};

export default Dashboard;