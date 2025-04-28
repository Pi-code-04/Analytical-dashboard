import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { FaUsers, FaComments, FaBook, FaRobot, FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import './Dashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

function Dashboard() {
  const [dateRange, setDateRange] = useState('Last 7 days');

  // Dummy data for charts and metrics
  const userTypes = [
    { type: 'New Users', percentage: 22.8, color: '#333333' },
    { type: 'Returning Users', percentage: 13.9, color: '#4A89DC' },
    { type: 'Active Users', percentage: 11.2, color: '#66D7B9' },
  ];

  const contentTraffic = [
    { name: 'Content', value: 80 },
    { name: 'Videos', value: 65 },
    { name: 'Activities', value: 45 },
    { name: 'AI/ML Chat', value: 95 },
    { name: 'Assessment', value: 55 },
    { name: 'Crisis Helpline', value: 35 },
  ];

  // Chart data for Pie chart
  const pieChartData = {
    labels: userTypes.map(user => user.type),
    datasets: [
      {
        data: userTypes.map(user => user.percentage),
        backgroundColor: userTypes.map(user => user.color),
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Line chart
  const lineChartData = {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    datasets: [
      {
        label: 'User Engagement',
        data: [40, 20, 50, 30, 60, 45, 55],
        borderColor: '#5a67d8',
        backgroundColor: 'rgba(90, 103, 216, 0.1)',
        tension: 0.4,
      },
    ],
  };

  // Chart data for Bar chart
  const barChartData = {
    labels: contentTraffic.map(item => item.name),
    datasets: [
      {
        label: 'Traffic',
        data: contentTraffic.map(item => item.value),
        backgroundColor: '#5a67d8',
        borderRadius: 4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Analytics</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="active">
            <span className="icon"><FaBook /></span>
            Overview
          </li>
          <li>
            <span className="icon"><FaUsers /></span>
            User Engagement 
          </li>
          <li>
            <span className="icon"><FaComments /></span>
            Chatbot Usage 
          </li>
          <li>
            <span className="icon"><FaBook /></span>
            Content and Resource Engagement
          </li>
          <li>
            <span className="icon"><FaUsers /></span>
            Profile
          </li>
        </ul>
        <div className="sidebar-footer">
          <div className="menu-item">
            <span className="icon">⚙️</span>
            Settings
          </div>
          <div className="menu-item logout">
            <span className="icon">🚪</span>
            Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="search-box">
            <span className="search-icon"><FaSearch /></span>
            <input type="text" placeholder="Search" />
          </div>

          <div className="header-right">
            <div className="notifications">
              <FaBell />
              <div className="notification-badge">3</div>
            </div>
            <div className="language">
              <span>🇮🇳</span>
              <span>English</span>
              <FaChevronDown size={12} />
            </div>
            <div className="user-profile">
              <div className="avatar">MR</div>
              <div className="user-info">
                <div className="user-name">PIYUSH SINHA</div>
                <div className="user-role">Admin</div>
              </div>
              <FaChevronDown size={12} />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="breadcrumb">
            <span>Dashboard</span> / <span>Overview</span>
          </div>

          <div className="date-selector">
            <div className="title">Date Range</div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="This month">This month</option>
              <option value="Last quarter">Last quarter</option>
              <option value="This year">This year</option>
            </select>
          </div>
<div></div>
{/* Stats Cards - Moved Below Date Range */}
      
<div className="stats-row">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-title">Total Users</div>
                <div className="stat-value">40,689</div>
                <div className="stat-change positive">
                  <span className="arrow">↑</span> 8.5% Up from yesterday
                </div>
              </div>
              <div className="stat-icon blue">
                <FaUsers size={24} color="#4A89DC" />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-title">Total Conversations</div>
                <div className="stat-value">24,853</div>
                <div className="stat-change positive">
                  <span className="arrow">↑</span> 12.3% Up from yesterday
                </div>
              </div>
              <div className="stat-icon yellow">
                <FaComments size={24} color="#F6AD55" />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-title">Content Views</div>
                <div className="stat-value">18,472</div>
                <div className="stat-change positive">
                  <span className="arrow">↑</span> 5.2% Up from yesterday
                </div>
              </div>
              <div className="stat-icon green">
                <FaBook size={24} color="#68D391" />
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-title">Most Popular Chat Prompt</div>
                <div className="stat-subtitle">Stress</div>
                <div className="stat-subvalue">(853 uses)</div>
                <div className="stat-change positive">
                  <span className="arrow">↑</span> 15% Up from yesterday
                </div>
              </div>
              <div className="stat-icon purple">
                <FaRobot size={24} color="#9F7AEA" />
              </div>
            </div>
          </div>
          
<div></div>
<div></div>
         

        <div className="charts-row">
          {/* Active User Engagement Chart */}
          <div className="chart-card">
            <h3>Active User Engagement</h3>
            <div className="chart-legend inline">
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#333'}}></div>
                <div>This year</div>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{backgroundColor: '#ccc'}}></div>
                <div>Last year</div>
              </div>
            </div>

            <div style={{ height: '250px' }}>
              <Line
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [
                    {
                      label: 'This Year',
                      data: [65, 40, 60, 30, 70, 40, 80],
                      borderColor: '#333',
                      backgroundColor: 'rgba(51, 51, 51, 0.1)',
                      tension: 0.4,
                    },
                    {
                      label: 'Last Year',
                      data: [40, 30, 45, 35, 55, 50, 60],
                      borderColor: '#ccc',
                      backgroundColor: 'rgba(204, 204, 204, 0.1)',
                      borderDash: [5, 5],
                      tension: 0.4,
                    }
                  ]
                }}
                options={chartOptions}
              />
            </div>
          </div>

          {/* User Types Chart */}
          <div className="chart-card">
            <h3>User Types</h3>
            <div style={{ height: '250px' }}>
              <Pie data={pieChartData} options={chartOptions} />
            </div>
          </div>
          

          {/* Content Traffic */}
          <div className="chart-card">
            <h3>Content Traffic</h3>
            <div style={{ height: '250px' }}>
              <Bar
                data={barChartData}
                options={{
                  ...chartOptions,
                  indexAxis: 'y',
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          </div>
           {/* Peak Engagement Chart */}
           <div className="chart-card">
            <h3>Peak Engagement by Hours</h3>
            <div style={{ height: '250px' }}>
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
