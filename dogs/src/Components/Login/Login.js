import React from 'react';
import { Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LostPassword from './LostPassword';
import ResetPassword from './ResetPassword';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/lostpass" element={<LostPassword />} />
        <Route path="/resetpass" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
