import React from 'react'
import { Link } from 'react-router-dom'

const CourseCatagory = ({ course }) => {
    return (
        <ul >
            <Link className='w-full btn btn-outline btn-warning text-center' to={`/courses/details/${course.id}`}><li>{course.name}</li></Link>
        </ul>
    )
}

export default CourseCatagory