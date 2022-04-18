import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebse.init';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;