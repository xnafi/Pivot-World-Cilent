import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Catagories from './Catagories'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="bg-white dark:bg-gray-900 h-screen md:h-full w-full px-12 bgCourses bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row justify-center items-center" >
            <div className='grid md:grid-cols-12 grid-rows-2 h-full w-full place-items-center mt-32'>
                <div className='col-span-2 h-screen w-full px-2 space-y-3'>
                    {
                        courses.map(course =>
                            <>
                                <ul key={course.key}>
                                    <Link className='w-full btn btn-outline btn-warning text-center' to={`/course/${course.id}`}><li>{course.name}</li></Link>
                                </ul>
                            </>
                        )
                    }
                </div>
                <div className='col-span-10 h-screen bg-slate-600 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    {
                        courses.map(course =>
                            <>
                                <div key={course.id} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-lg">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <img src={course.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                          
                                        </div>
                                        <div className="space-y-2">
                                            <a rel="noopener noreferrer" href="#" className="block">
                                                <h3 className="text-xl font-semibold dark:text-violet-400">{course.name}</h3>
                                            </a>
                                            <p className="leading-snug dark:text-gray-400">{`${course.des.slice(0,150)}...more`}</p>
                                        </div>
                                        <div className="flex justify-between pb-4 border-bottom">
                                        <div className="flex items-center">
                                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Photography</a>
                                        </div>
                                        <a rel="noopener noreferrer" href="#">See All</a>
                                    </div>
                                    </div>
                                </div>
                            </>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Courses