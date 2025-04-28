// ChatBot.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { FaUsers, FaComments, FaBook, FaSearch, FaBell, FaChevronDown, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Dashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  ChartTooltip,
  Legend
);

const ChatBot = () => {
  // Data for the conversion chart
  const conversionData = [
    { name: 'Jan', value: 80 },
    { name: 'Feb', value: 50 },
    { name: 'Mar', value: 110 },
    { name: 'Apr', value: 100 },
    { name: 'May', value: 70 },
    { name: 'Jun', value: 120 },
    { name: 'Jul', value: 130 },
  ];

  // Chart data for Line chart
  const lineChartData = {
    labels: conversionData.map(item => item.name),
    datasets: [
      {
        label: 'Conversion',
        data: conversionData.map(item => item.value),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.1)',
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Data for the pie chart
  const pieData = [
    { name: 'Stress', value: 22.8, color: '#222' },
    { name: 'Anxiety', value: 13.9, color: '#8FD5A6' },
    { name: 'Active Users', value: 11.2, color: '#74BBFB' },
    { name: 'Other', value: 52.1, color: '#AAAAAA' },
  ];

  // Chart data for Pie chart
  const pieChartData = {
    labels: pieData.map(item => item.name),
    datasets: [
      {
        data: pieData.map(item => item.value),
        backgroundColor: pieData.map(item => item.color),
        borderWidth: 1,
      },
    ],
  };

  // Data for popular chat prompts
  const promptsData = [
    { name: 'Stressed', users: 102, percentage: 85 },
    { name: 'Confused', users: 117, percentage: 90 },
    { name: 'Sleep Issues', users: 60, percentage: 75 },
    { name: 'Work Stress', users: 12, percentage: 25 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="menu-button"><FaBars /></button>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item">
            <span className="nav-icon"><FaBook /></span>
            <span>Overview</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"><FaUsers /></span>
            <span>User Engagement and Onboarding</span>
          </div>
          <div className="nav-item active">
            <span className="nav-icon"><FaComments /></span>
            <span>Chatbot Usage and Conversation Analytics</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"><FaBook /></span>
            <span>Content and Resource Engagement</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon"><FaUsers /></span>
            <span>Profile</span>
          </div>
          <div className="nav-item bottom">
            <span className="nav-icon"><FaCog /></span>
            <span>Settings</span>
          </div>
          <div className="nav-item bottom">
            <span className="nav-icon logout"><FaSignOutAlt /></span>
            <span className="logout">Logout</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-button"><FaSearch /></button>
          </div>
          <div className="header-right">
            <div className="notification"><FaBell /></div>
            <div className="language-selector">
              <span>🇮🇳</span>
              <span>English</span>
              <FaChevronDown size={12} />
            </div>
            <div className="user-profile">
              <div className="avatar">MR</div>
              <div className="user-info">
                <div className="user-name">PIYUSH</div>
                <div className="user-role">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Path */}
        <div className="dashboard-path">
          Dashboard / Chatbot Usage and Conversation Analytics
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Charts Row */}
          <div className="charts-row">
            {/* Conversion Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Conversion Over Time</h3>
                <div className="chart-legend">
                  <span className="legend-dot"></span>
                  <span className="legend-text">VALUE (0)</span>
                </div>
              </div>
              <div className="chart-container" style={{ height: '250px' }}>
                <Line data={lineChartData} options={chartOptions} />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Popular User Content (Concern & Sub Concern)</h3>
              </div>
              <div className="chart-container pie-container">
                <div style={{ height: '250px' }}>
                  <Pie data={pieChartData} options={chartOptions} />
                </div>
                <div className="pie-legend">
                  {pieData.map((entry, index) => (
                    <div className="legend-item" key={index}>
                      <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
                      <span className="legend-label">{entry.name}</span>
                      <span className="legend-value">{entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Popular Prompts */}
          <div className="chart-card full-width">
            <div className="chart-header">
              <h3>Popular Chat Prompts</h3>
              <button className="view-more">View More</button>
            </div>
            <div className="prompts-table">
              <div className="table-header">
                <div className="column">Prompts</div>
                <div className="column">No of Users</div>
                <div className="column">Average percentage% of users</div>
              </div>
              {promptsData.map((prompt, index) => (
                <div className="table-row" key={index}>
                  <div className="column">
                    <strong>{prompt.name}</strong>
                  </div>
                  <div className="column">{prompt.users}</div>
                  <div className="column">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: '85%' }}>
                        <div className="progress-bar">
                          <div className="progress" style={{ width: `${prompt.percentage}%` }}></div>
                        </div>
                      </div>
                      <div style={{ width: '15%', textAlign: 'right', fontWeight: '500' }}>
                        {prompt.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
