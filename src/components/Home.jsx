import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaFoursquare } from "react-icons/fa"
import bannar from '../assets/images/homeBg.jpg'
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <header className="bg-white dark:bg-gray-900 h-full md:h-screen w-full px-8 bgSet bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row">
            <div className='flex flex-col justify-center text-white w-full h-full xl:pl-10 md:pl-6 mt-24 md:mt-0'>
                <small className='text-xs font-bold text-left left-40'>25 year's of experience in web design soulations</small>
                <h1 className='xl:text-6xl md:4xl text-4xl font-bold text-left'>
                    Digital web design soulation agency
                </h1>
                <Link to='/courses' className="btn btn-outline btn-warning md:w-1/3 mt-4">Courses <FaFoursquare className='pl-2'></FaFoursquare></Link>

            </div>
            <div className='flex flex-col justify-center relative items-center text-white w-full h-full my-10'>
                <img src={bannar} className='w-11/12 shadow-xl rounded-md opacity-75' alt="bannar" />
                <span className='xl:text-6xl md:text-4xl mt-5xl text-2xl font-bold absolute xl:bottom-20 md:bottom-24 bottom-40 text-white'>
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'Web Design',
                            1500,
                            'Web Development',
                            1500,
                            'Responsive Design',
                            1500

                        ]}
                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />
                </span>
            </div>
        </header >

    )
}

export default Home