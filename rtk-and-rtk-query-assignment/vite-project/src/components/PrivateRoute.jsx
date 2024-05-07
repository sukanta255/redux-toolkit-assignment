import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.user !== null);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;