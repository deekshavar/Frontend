// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProfilePage from './components/Profile/ProfilePage';
import DataVisualization from './components/Board/DataVisualization';
import UserForm from './components/Form/UserForm';  // Added UserForm
import ThemeToggle from './components/ThemeToggle';
import ProtectedRoute from './components/ProtectedRoute';
import './i18n'; // i18n setup

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<UserForm />} /> {/* Set UserForm as the landing page */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><DataVisualization /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
