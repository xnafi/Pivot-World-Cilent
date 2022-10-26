import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
  const course = useLoaderData()
  const { image, des, name, courseDetail, duration } = course

  return (
    <div className="bg-white dark:bg-gray-900 h-full md:h-full w-full px-8 bgCourse bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row justify-center items-center" >
      <div className="md:w-3/4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg-slate-700 my-10 mt-28">
        <img src={image} alt="" className="object-fill object-center w-full h-96 rounded-md dark:bg-gray-500" />
        <div className="mt-6 mb-2 text-white px-4 space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <h2 className="text-md font-semibold tracking-wide">Duration : {duration}</h2>
        </div>
        <p className="dark:text-gray-100 px-4 text-white">{des}</p>
        <ul className='text-white px-4 my-4'>
          <span className='text-xl font-bold'>What you learn</span>
          {
            courseDetail.map(data => <li>{data}</li>)
          }
        </ul>
        <Link to='/courses' className="btn btn-outline btn-warning my-4 ml-3 px-10">Courses</Link>
      </div>
    </div>
  )
}

export default CourseDetails