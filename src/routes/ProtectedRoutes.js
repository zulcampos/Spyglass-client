import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const useAuth =()=> {
    const user = sessionStorage.getItem("Auth Token");
    return user;
}

export const ProtectedRoutes = (props) => {
    const auth = useAuth();
    return (auth) ? <Outlet />: <Navigate to="/login" />
}

export const PublicRoutes = (props) => {
    const auth = useAuth();
    return (auth)? <Navigate to="/home" /> : <Outlet/>;
}