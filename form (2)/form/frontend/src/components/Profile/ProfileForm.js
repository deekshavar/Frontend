// src/components/Profile/ProfileForm.js
import React, { useState } from 'react';

const ProfileForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Profile updated: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-lg font-bold">Edit Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mt-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded">
        Update Profile
      </button>
    </form>
  );
};

export default ProfileForm;
