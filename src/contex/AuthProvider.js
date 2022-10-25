import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.init'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    // login with email

    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create new user 
    const signUpNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user name
    const setUserId = (profile) => {
        return updateProfile(auth, profile)
    }

    // email varificiton
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // logout user
    const logOut =()=>{
        return signOut(auth)
    }

    // get user information
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])
    // google and github SignIn 
    const socialAccountLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }





    const values = {
        user,
        setUserId,
        signUpNewUser,
        socialAccountLogin,
        emailPasswordLogin,
        varifyEmail,
        logOut

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