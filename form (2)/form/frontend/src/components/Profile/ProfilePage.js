// src/components/Profile/ProfilePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Profile</h2>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <button
        onClick={() => {
          dispatch(logout());
          alert('Logged out');
        }}
        className="bg-red-500 text-white p-2 mt-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
