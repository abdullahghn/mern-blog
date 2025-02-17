import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RouteSignIn } from '@/helpers/RouteName';

const AuthRouteProtection = () => {

    const user = useSelector(state => state.user)
    if(user && user.isLoggedIn) {
        return (
            <Outlet />
        )
    }else {
        return <Navigate to={RouteSignIn} />
    }
}

export default AuthRouteProtection