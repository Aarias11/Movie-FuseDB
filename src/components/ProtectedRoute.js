import React from 'react';
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

function ProtectedRoute({children}) {


    // PROTECTED ROUTE TO HAVE ACCOUNT PAGE PROTECTED. CANNOT GO TO IT WITHOUT BEING SIGNED IN


    const {user} = UserAuth()
    if(!user) {
        return <Navigate to='/' />
    } else {
        return children
    }
  
}

export default ProtectedRoute