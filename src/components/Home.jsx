import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaFoursquare } from "react-icons/fa"
import bannar from '../assets/images/homeBg.jpg'

const Home = () => {
    return (
        <header className="bg-white dark:bg-gray-900 h-full md:h-screen w-full px-8 bgSet bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row">
            <div className='flex flex-col justify-center text-white w-full h-full pl-20'>
                <small className='text-xs font-bold text-left left-40'>25 year's of experience in web design soulations</small>
                <h1 className='text-6xl font-bold text-left'>
                    Digital web design soulation agency
                </h1>
                <Link to='/courses' className="btn btn-outline btn-warning w-1/3 mt-4">Courses <FaFoursquare className='pl-2'></FaFoursquare></Link>

            </div>
            <div className='flex flex-col justify-center mt-10 relative items-center text-white w-full h-full'>
                <img src={bannar} className='w-11/12 shadow-xl rounded-md ' alt="bannar" />
                <span className='text-6xl font-bold absolute bottom-20 text-blue-500'>
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