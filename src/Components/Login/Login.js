import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LostPass from './LostPass';
import ResetPass from './ResetPass';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LostPass />} />
          <Route path="reset" element={<ResetPass />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
