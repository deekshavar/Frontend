import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    interests: [],
    country: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  
  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Assuming signup API is called here, then redirect
      navigate('/signup'); // Redirect to the login page
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Account</h1>
      
      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
      </div>

      {/* Interests */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Interests</label>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="coding"
              checked={formData.interests.includes('coding')}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2 text-gray-700">Coding</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="music"
              checked={formData.interests.includes('music')}
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2 text-gray-700">Music</span>
          </label>
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select your country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
        </select>
      </div>

      {/* Profile Picture */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <input type="file" onChange={handleFileChange} className="mt-2" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Create
      </button>
    </form>
  );
};

export default UserForm;
