import { createBrowserRouter } from 'react-router-dom'
import Courses from '../components/Courses'
import ErrorPage from '../components/ErrorPage'
import Faq from '../components/Faq'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import SignUp from '../components/SignUp'
import Main from '../layout/Main'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
       errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/login',
                element: <Login />
            },  {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
])