import React, { useState } from 'react';
import './SelfPage.css';

const SelfPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dateRange, setDateRange] = useState("Last 7 days");

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="sidebar-nav">
          <li>Overview</li>
          <li>User Engagement & Onboarding</li>
          <li>Chatbot Usage & Conversation Analytics</li>
          <li className="active">Self-Assessment & Personalized Recommendations</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Dashboard</h1>
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
          <div className="settings-icon">⚙️</div>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <span className="search-icon">🔍</span>
          </div>
          <div className="dropdown-container">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown('date')}
            >
              Date Range <span className="arrow">▼</span>
            </div>
            {activeDropdown === 'date' && (
              <ul className="dropdown-menu">
                <li>Last 7 days</li>
                <li>Last 30 days</li>
                <li>Last 90 days</li>
                <li>Custom range</li>
              </ul>
            )}
          </div>
          <div className="dropdown-container">
            <div 
              className="dropdown-toggle" 
              onClick={() => toggleDropdown('age')}
            >
              Age Group <span className="arrow">▼</span>
            </div>
            {activeDropdown === 'age' && (
              <ul className="dropdown-menu">
                <li>18-24</li>
                <li>25-34</li>
                <li>35-44</li>
                <li>All</li>
              </ul>
            )}
          </div>
          <div className="dropdown-container">
            <div 
              className="dropdown-toggle" 
              onClick={() => toggleDropdown('all')}
            >
              All <span className="arrow">▼</span>
            </div>
            {activeDropdown === 'all' && (
              <ul className="dropdown-menu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Assessment Completion Rates */}
          <div className="card completion-rates">
            <h3>Assessment Completion Rates</h3>
            <div className="funnel-chart">
              <div className="funnel-step">
                <div className="funnel-bar step-1"></div>
                <div className="funnel-label">
                  <span>Started</span>
                  <span className="funnel-count">1,040</span>
                </div>
              </div>
              <div className="funnel-step">
                <div className="funnel-bar step-2"></div>
                <div className="funnel-label">
                  <span>Midway</span>
                  <span className="funnel-count">854</span>
                </div>
              </div>
              <div className="funnel-step">
                <div className="funnel-bar step-3"></div>
                <div className="funnel-label">
                  <span>Near Completion</span>
                  <span className="funnel-count">689</span>
                </div>
              </div>
              <div className="funnel-step">
                <div className="funnel-bar step-4"></div>
                <div className="funnel-label">
                  <span>Submitted</span>
                  <span className="funnel-count">597</span>
                </div>
              </div>
            </div>
          </div>

          {/* Drop-off Points */}
          <div className="card drop-off">
            <h3>Drop-off Points in Assessments</h3>
            <div className="bar-chart">
              <div className="bar-group">
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar-label">Q1</div>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '65%' }}></div>
                <div className="bar-label">Q2</div>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '35%' }}></div>
                <div className="bar-label">Q3</div>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '15%' }}></div>
                <div className="bar-label">Q4</div>
              </div>
            </div>
          </div>

          {/* Assessment Results Analytics */}
          <div className="card results-analytics">
            <h3>Assessment Results Analytics</h3>
            <div className="donut-chart">
              <div className="donut-hole"></div>
              <div className="segment segment-1" title="35%"></div>
              <div className="segment segment-2" title="27%"></div>
              <div className="segment segment-3" title="18%"></div>
              <div className="segment segment-4" title="20%"></div>
              <div className="legend">
                <div className="legend-item">
                  <span className="legend-color color-1"></span>
                  <span className="legend-text">35%</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color color-2"></span>
                  <span className="legend-text">27%</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color color-3"></span>
                  <span className="legend-text">18%</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color color-4"></span>
                  <span className="legend-text">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demographics Comparison */}
          <div className="card demographics">
            <h3>Demographic Comparison of Results</h3>
            <div className="severity-chart">
              <div className="severity-header">
                <span className="severity-label mild">Mild</span>
                <span className="severity-label severe">Severe</span>
              </div>
              <div className="severity-bars">
                <div className="severity-group">
                  <div className="severity-bar">
                    <div className="severity-fill" style={{ height: '75%' }}></div>
                  </div>
                  <div className="severity-label">18-24</div>
                </div>
                <div className="severity-group">
                  <div className="severity-bar">
                    <div className="severity-fill" style={{ height: '60%' }}></div>
                  </div>
                  <div className="severity-label">25-34</div>
                </div>
                <div className="severity-group">
                  <div className="severity-bar">
                    <div className="severity-fill" style={{ height: '45%' }}></div>
                  </div>
                  <div className="severity-label">35-44</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfPage;