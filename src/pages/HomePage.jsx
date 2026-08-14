import React from 'react'
import { Link, useNavigate } from 'react-router'

const HomePage = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            {user ? (
                <div className='flex gap-2 border-2 border-gray-500 shadow-md rounded-lg p-4'>
                    <div>
                        <h1 className='text-4xl font-bold'>{user?.name}</h1>
                    <p>{user?.email}</p>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className='flex flex-col gap-2 border-2 border-gray-500 shadow-md rounded-lg p-4'>
                    <Link to="/signup"><button className='bg-blue-600 border-2 border-blue-600 text-white px-4 py-1 rounded-md w-full'>Signup</button></Link>
                    <Link to="/login"> <button className='border-2 border-blue-600 text-black px-4 py-1 rounded-md w-full'>Login</button></Link>
                </div>
            )}
        </div>
    )
}

export default HomePage