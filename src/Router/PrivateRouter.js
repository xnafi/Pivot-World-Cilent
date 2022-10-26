import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <>loading....</>
    }
    if (user && user.uid) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />

    }
}

export default PrivateRouter