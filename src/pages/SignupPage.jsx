import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import { Link, useNavigate } from 'react-router';
import { Check, LoaderCircle, X } from 'lucide-react';

const SignupPage = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        name: "",
        username: "",
        email: "",
        otp: ""
    })
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState("form");
    const [isExist, setIsExist] = useState(null)
    const [checkingUsername, setCheckingusername] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    // check username   auth/check-username?u=abc
    const checkUsername =async()=>{
        setCheckingusername(true)
        try{
          const response = await axiosInstance.post(`/auth/check-username?u=${formdata.username}`);
          if(response.data.success){
            setIsExist(response.data.exists);
          } else {
            setIsExist(null)
          }

        }
        catch(error){
            console.log("Error while checking username", error);
        } finally {
            setCheckingusername(false)
        }
    }

    // we have to track every key stroke in username, when i type k o m, this useeffect should knows i type in usernme
    // that is done in useeffect username api calls when we type, user useeffect run check username function when wer type and 
    // check username function check is that exists or not
    useEffect(() => {
         // if username have nothing we dont want ot run that check username function 
         // or we want min char length is 3 to check then we can do like 
        if(!formdata.username && formdata.username.length < 3) {
            setIsExist(null);
            return; // if meet those condition then return other wise
        }
        checkUsername(); // check username funs and check for username
    }, [formdata.username]) // depedency array watch the formdata.username change and run the function.

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post('/auth/register', formdata)
            if (response.data.success) {
                setOtp(response.data.data.code)
                setStep("otp")
            }
            else {
                setOtp("")
            }

        }
        catch (error) {
            console.log("error while signup", error)
        }
    }

    const handleVerifyOtp = async (e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post('/auth/verify', {
                email: formdata.email,
                code: formdata.otp
            })
            if (response.data.success) {
                localStorage.setItem("user", JSON.stringify(response.data.data))
                navigate("/")
            }
            else {
                setOtp("")
            }

        }
        catch (error) {
            console.log("error while signup", error)
        }
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {step == "form" ? (
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 border-2 border-gray-200 rounded-lg p-4 shadow-2xl'
                >
                    <div>
                        <h1 className='text-2xl font-bold'>Signup 👋</h1>
                        <p className='text-sm text-gray-500'>Register Now</p>
                    </div>
                    <input
                        type="text"
                        name='username'
                        placeholder='Enter username'
                        className='border border-gray-300 rounded-lg px-2 py-1'
                        value={formdata.username}
                        onChange={handleChange}
                    />
                    <div>  
                        // 
                        { checkingUsername ? (
                            <p className='text-[10px] text-blue-600 flex gap-1 items-center'><LoaderCircle size={12} className='' /> Username is available.</p>
                        ) :

                        !isExist ? (
                                <p className='text-[10px] text-green-600 flex gap-1 items-center'><Check size={12} /> Username is available.</p>
                        ) : (
                             <p className='text-[10px] text-red-600 flex gap-1 items-center'><X size={12} /> Username is not available.</p>
                        )}
                        
                       
                    </div>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter name'
                        className='border border-gray-300 rounded-lg px-2 py-1'
                        value={formdata.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name='email'
                        placeholder='Enter email'
                        className='border border-gray-300 rounded-lg px-2 py-1'
                        value={formdata.email}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className='w-full bg-blue-500 border-2 border-blue-700 py-1 rounded-lg'
                    >
                        Get OTP
                    </button>
                     <p className='text-center'>Already have account <br /> <Link to={"/login"} className="text-blue-500 underline font-bold">Login</Link></p>
                </form>

            ) : (
                <form
                    onSubmit={handleVerifyOtp}
                    className='flex flex-col gap-4 border-2 border-gray-200 rounded-lg p-4 shadow-2xl'
                >
                    <div>
                        <h1 className='text-2xl font-bold'>Signup 👋</h1>
                        <p className='text-sm text-gray-500'>Enter OTP</p>
                    </div>
                    <input
                        type="text"
                        name='otp'
                        placeholder='Enter otp'
                        className='border border-gray-300 rounded-lg px-2 py-1'
                        value={formdata.otp}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className='w-full bg-blue-500 border-2 border-blue-700 py-1 rounded-lg'
                    >
                        Signup
                    </button>
                   
                </form>
            )}
        </div>
    )
}

export default SignupPage