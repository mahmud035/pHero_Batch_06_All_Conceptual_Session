import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/Loader';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
