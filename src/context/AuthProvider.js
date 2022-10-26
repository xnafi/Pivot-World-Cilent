import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.init'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // login with email

    const emailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create new user 
    const signUpNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user name
    const setUserId = (profile) => {
        setLoading(true)
        return updateProfile(auth, profile)
    }

    // email varificiton
    const varifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // logout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const socialAccountLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // get user information
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])
    // google and github SignIn 






    const values = {
        user,
        setUserId,
        signUpNewUser,
        socialAccountLogin,
        emailPasswordLogin,
        varifyEmail,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={values} >
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthProvider