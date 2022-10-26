import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CatagoriesData from './CatagoriesData'
import CourseCatagory from './CourseCatagory'
import Catagories from './CourseDetails'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="dark:bg-gray-900 h-full w-full px-12 bgCourses bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row " >
            <div className='lg:grid lg:grid-cols-12 h-full w-full mt-32 my-5 md:flex md:flex-col md:space-y-4 lg:grid-rows-none gap-y-4 md:gap-y-0'>
                <div className='col-span-2  h-full w-full px-2 space-y-3 mt-4'>
                    {
                        courses.map(course => <CourseCatagory key={course.id} course={course} />)
                    }
                </div>
                <div className='col-span-10 h-full lg:h-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-2 '>
                    {
                        courses.map(course => <CatagoriesData key={course.id} course={course} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Courses