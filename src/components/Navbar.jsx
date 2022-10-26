import React, { useContext, useState } from 'react'
import { Switch } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import logo from '../assets/images/pivotLogo.png';
import { AuthContext } from '../contex/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('logout successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }).catch((error) => {
                console.log(error);
            });
    }

    return (

        <div className='sm:px-4 py-5 w-full md:px-14 absolute z-20 top-0 '>
            <div className='relative flex items-center justify-between px-4'>
                <Link
                    to='/'
                    aria-label='Pivot home'
                    title='Pivot home'
                    className='inline-flex items-center'
                >
                    <img src={logo} className='w-20 md:w-32 bg-yellow-50 px-3 py-1 rounded-xl' alt='pivot logo' />
                </Link>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/home'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) =>
                                isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/courses'
                            aria-label='Courses'
                            title='Courses'
                            className={({ isActive }) =>
                                isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                            }
                        >
                            Courses
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/faq'
                            aria-label='FAQ'
                            title='FAQ'
                            className={({ isActive }) =>
                                isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>

                    {
                        user && <li>
                            <NavLink
                                to='/profile'
                                aria-label='profile'
                                title={user?.displayName}
                                className={({ isActive }) =>
                                    isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >

                                {
                                    user ? <img src={user.photoURL} alt="" className="w-14 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> : <FaUserAlt></FaUserAlt>
                                }
                            </NavLink>
                        </li>
                    }
                    {
                        user ? <li>
                            <NavLink
                                onClick={handleLogout}
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                }
                            >
                                Logout
                            </NavLink>
                            <ToastContainer />
                        </li> :
                            <>
                                <li>
                                    <NavLink
                                        to='/login'
                                        aria-label='Login'
                                        title='Login'
                                        className={({ isActive }) =>
                                            isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/signup'
                                        aria-label='Sign up'
                                        title='Sign up'
                                        className={({ isActive }) =>
                                            isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                        }
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                            </>
                    }
                    <li>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-white' : 'bg-black'}
                             relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                                 pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-slate-700 shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transemifont-semibold border-black duration-200 rounsemifont-semibold hover:border-b-2 border-blackcus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='Company'
                                            title='Company'
                                            className='inline-flex items-center'
                                        >
                                            <img src={logo} className='w-20' alt='pivot logo' />
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/home'
                                                aria-label='Home'
                                                title='Home'
                                                className={({ isActive }) =>
                                                    isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/courses'
                                                aria-label='Courses'
                                                title='Courses'
                                                className={({ isActive }) =>
                                                    isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                }
                                            >
                                                Courses
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/faq'
                                                aria-label='FAQ'
                                                title='FAQ'
                                                className={({ isActive }) =>
                                                    isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                }
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        {
                                            user ? <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to='/'
                                                    className={({ isActive }) =>
                                                        isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    }
                                                >
                                                    Logout
                                                </NavLink>
                                                <ToastContainer />
                                            </li> :
                                                <>
                                                    <li>
                                                        <NavLink
                                                            to='/login'
                                                            aria-label='Login'
                                                            title='Login'
                                                            className={({ isActive }) =>
                                                                isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            }
                                                        >
                                                            Login
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to='/signup'
                                                            aria-label='Sign up'
                                                            title='Sign up'
                                                            className={({ isActive }) =>
                                                                isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                            }
                                                        >
                                                            Sign up
                                                        </NavLink>
                                                    </li>
                                                </>
                                        }

                                        {
                                            user && <li>
                                                <NavLink
                                                    to='/profile'
                                                    aria-label='profile'
                                                    title={user?.displayName}
                                                    className={({ isActive }) =>
                                                        isActive ? 'font-bold border-b-2 border-black tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-black' : 'font-semibold hover:border-b-2 border-black tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    }
                                                >

                                                    {
                                                        user ? <img src={user.photoURL} alt="" className="w-14 mx-auto rounded-full dark:bg-gray-500 aspect-square" /> : <FaUserAlt></FaUserAlt>
                                                    }
                                                </NavLink>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar