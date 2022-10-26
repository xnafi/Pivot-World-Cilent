import React from 'react'
import { Link } from 'react-router-dom'

const CatagoriesData = ({ course }) => {
    return (
        <div className="p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white rounded-lg">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={course.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">{course.name}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-400">{`${course.des.slice(0, 150)}`}...</p>
                </div>
                <div className="flex justify-between pb-4 border-bottom">
                    <Link to={`/courses/details/${course.id}`} className="btn btn-outline btn-primary">Details</Link>
                    <Link to={`/purchase/${course.id}`} className="btn btn-outline btn-info text-md">Get premium access</Link>
                </div>
            </div>
        </div>
    )
}

export default CatagoriesData