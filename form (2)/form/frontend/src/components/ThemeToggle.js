// src/components/ThemeToggle.js
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Load initial state from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false; // Default to light mode if not set
  });

  // Effect to update the class on the documentElement when darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
