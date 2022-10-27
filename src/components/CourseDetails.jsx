import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const ref = React.createRef();
  const course = useLoaderData()
  const { image, des, name, courseDetail, duration, id } = course

  return (
    <div className="bg-white dark:bg-gray-900 h-full md:h-full w-full px-8 bgCourse bg-center bg-fixed bg-cover bg-no-repeat flex flex-col md:flex-row justify-center items-center" >

      <div className="md:w-3/4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg-slate-700 my-10 mt-28" ref={ref}>
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
        <div className='flex justify-between items-center px-3'>
          <Pdf className='bg-slate-500' targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) =>
              <button className="btn btn-outline btn-warning my-4 px-10" onClick={toPdf}>Download</button>}
          </Pdf>
          <Link to={`/purchase/${id}`} className="btn btn-outline btn-info text-md">Get premium access</Link>

          {/* <Link to='/courses' className="btn btn-outline btn-warning my-4 px-10">Courses</Link> */}
        </div>

      </div>
    </div>
  )
}

export default CourseDetails