// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ProtectedRouteProps {
  children: React.ReactNode; // Explicitly type children
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token);

  // console.log('ProtectedRoute: token =', token); // Debug token state

  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>; // Render children only if authenticated
};

export default ProtectedRoute;
