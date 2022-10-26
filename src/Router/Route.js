import { createBrowserRouter } from 'react-router-dom'
import Blog from '../components/Blog'
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
                loader: () => fetch('https://pivot-design-server.vercel.app/courses')
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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/courses/details/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://pivot-design-server.vercel.app/courses/details/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivateRouter><Purchase /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://pivot-design-server.vercel.app/purchase/${params.id}`)
            }
        ]
    }
])