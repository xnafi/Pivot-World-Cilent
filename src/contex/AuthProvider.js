import React, { createContext } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    // sign up with email


    const user = { name: 'forhad' }
    const values = { user }
    return (
        <AuthContext.Provider value={values} >
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider