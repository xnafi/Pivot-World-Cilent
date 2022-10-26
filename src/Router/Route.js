import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About'
import CourseDetails from '../components/CourseDetails'
import Courses from '../components/Courses'
import ErrorPage from '../components/ErrorPage'
import Faq from '../components/Faq'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Purchase from '../components/Purchase'
import SignUp from '../components/SignUp'
import Main from '../layout/Main'
import PrivateRouter from './PrivateRouter'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
                element: <Profile />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/courses/details/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/details/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivateRouter><Purchase /></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/purchase/${params.id}`)
            }
        ]
    }
])