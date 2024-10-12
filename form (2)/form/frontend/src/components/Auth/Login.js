// src/components/Auth/Login.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(login({ email: user.email, uid: user.uid }));
      alert('Login successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-bold">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
