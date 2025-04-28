import React, { useState } from 'react';
import { FaUsers, FaComments, FaBook, FaSearch, FaBell, FaChevronDown, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Dashboard.css';

const User = () => {
  const [activeTab, setActiveTab] = useState('User Engagement and Onboarding');

  return (
    <div className="user-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-items">
          <div className="sidebar-item">
            <span className="icon"><FaBook /></span>
            <span>Overview</span>
          </div>
          <div className="sidebar-item active">
            <span className="icon"><FaUsers /></span>
            <span>User Engagement and Onboarding</span>
          </div>
          <div className="sidebar-item">
            <span className="icon"><FaComments /></span>
            <span>Chatbot Usage </span>
          </div>
          <div className="sidebar-item">
            <span className="icon"><FaBook /></span>
            <span>Content and Resource Engagement</span>
          </div>
          <div className="sidebar-item">
            <span className="icon"><FaUsers /></span>
            <span>Profile</span>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-item">
            <span className="icon"><FaCog /></span>
            <span>Settings</span>
          </div>
          <div className="sidebar-item">
            <span className="icon"><FaSignOutAlt /></span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <button className="menu-toggle"><FaBars /></button>
            <div className="search-box">
              <span><FaSearch /></span>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="header-right">
            <div className="notification">
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
                <div className="name">PIYUSH SINHA</div>
                <div className="role">Admin</div>
              </div>
              <FaChevronDown size={12} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span>/</span>
            <span>User Engagement and Onboarding</span>
          </div>

          <div className="filter-bar">
            <div className="dropdown">
              <span>Onboarding Segment (Segment Selection)</span>
              <span>▼</span>
            </div>
            <div className="dropdown">
              <span>Date Range</span>
              <span>▼</span>
            </div>
          </div>

          {/* Onboarding Flow Diagram */}
          <div className="flow-diagram">
            <div className="main-node">
              <div className="node-content">
                <div className="node-title">Onboarding</div>
                <div className="node-users">(1000 users)</div>
              </div>
            </div>

            <div className="nodes-container">
              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">Self Care</div>
                  <div className="node-users">(700 users)</div>
                </div>
              </div>

              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">Assessment</div>
                  <div className="node-users">(20 users)</div>
                </div>
              </div>

              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">AI/ML Chatbot</div>
                  <div className="node-users">(10 users)</div>
                </div>
              </div>

              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">Activities</div>
                  <div className="node-users">(20 users)</div>
                </div>
              </div>

              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">Videos</div>
                  <div className="node-users">(700 users)</div>
                </div>
              </div>

              <div className="node secondary">
                <div className="node-content">
                  <div className="node-title">Articles</div>
                  <div className="node-users">(10 users)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
