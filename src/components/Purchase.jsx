import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'

const Purchase = () => {
    const data = useLoaderData()

    const handleBuy = () => {
        toast('congrats purchase successful')
    }
    console.log("🚀 ~ file: Purchase.jsx ~ line 6 ~ Purchase ~ data", data)
    const { name, duration, price, des, image } = data
    return (
        <div className="dark:bg-gray-900 h-screen md:h-screen w-full px-8 bgPurchase bg-center bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center" >
            <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-1/3 items-center justify-center flex">
                    <img src={image} alt="" />
                </div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>
                    <h1 className="text-lg font-bold text-gray-800 dark:text-white my-2">Duration : {duration}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{des.slice(0, 100)}..</p>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
                        <button onClick={handleBuy} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Buy now</button>
                    </div>
                </div>
            </div>
            <Link to='/courses' className="btn btn-outline btn-warning my-4 ml-3 px-10">Buy more</Link>


        </div>
    )
}

export default Purchase