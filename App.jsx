import { useState } from 'react';
import './App.css';
import Dashboard from './assets/Dashboard'; // Fixed casing
import User from './assets/User';
import ChatBot from './assets/ChatBot';
import SelfPage from './SelfPage';


function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="App">
      <div className="page-selector" style={{
        padding: '15px',
        textAlign: 'center',
        background: '#f0f0f0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => setCurrentPage('dashboard')}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            background: currentPage === 'dashboard' ? '#5a67d8' : '#fff',
            color: currentPage === 'dashboard' ? '#fff' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('user')}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            background: currentPage === 'user' ? '#5a67d8' : '#fff',
            color: currentPage === 'user' ? '#fff' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          User
        </button>
        <button
          onClick={() => setCurrentPage('chatbot')}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            background: currentPage === 'chatbot' ? '#5a67d8' : '#fff',
            color: currentPage === 'chatbot' ? '#fff' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          ChatBot
        </button>
        <button
          onClick={() => setCurrentPage('selfpage')}
          style={{
            padding: '8px 16px',
            margin: '0 10px',
            background: currentPage === 'selfpage' ? '#5a67d8' : '#fff',
            color: currentPage === 'selfpage' ? '#fff' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Self Page
        </button>
      </div>

      <div style={{ marginTop: '60px' }}>
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'user' && <User />}
        {currentPage === 'chatbot' && <ChatBot />}
        {currentPage === 'selfpage' && <SelfPage />}
      </div>
    </div>
  );
}

export default App;
