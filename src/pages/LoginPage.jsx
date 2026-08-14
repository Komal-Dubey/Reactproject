import React, { useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { Link, useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    email: "",
    otp: ""
  })
  const [otp, setOtp] = useState("")

  //checklist✔️
  // 1. first create loading state and by default false
  // 2. in handle submit after preventDefault add setloading true,
  // 3. after success turn back to set loading false and in catch also set loading false 
  // 4. in login button add disable property loading if true 
  // 5. and button text if loading then show loading... else login 


  const [step, setStep] = useState("form")
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', { email: formdata.email })
      if (response.data.success) {
        setOtp(response.data.data.code)
        setLoading(false);
        setStep("otp")
      }
    }
    catch (error) {
      console.log("error while signup", error)
       setLoading(false);
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/verify-login', {
        email: formdata.email,
        code: formdata.otp
      })
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.data))
        setLoading(false); // after setting the data then and more easy or convinient 
        navigate("/")

      }
    }
    catch (error) {
      console.log("error while signup", error)
       setLoading(false);

    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    })
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {step=="form"? (
        <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 border-2 border-gray-200 rounded-lg p-4 shadow-2xl'
      >
        <div>
          <h1 className='text-2xl font-bold flex item-center justify-center'>Login 👋</h1>
          <input
            type="text"
            name="email"
            placeholder='Enter mail here'
            className='border border-gray-300 rounded-lg px-2 py-1 mt-2'
            value={formdata.email}
            onChange={handleChange}
          />
        </div>
        <button 
          type='submit'  // again koi click nhi kr payga jb tak api response nhi de deti, ya jb tak button disabled h
          className='w-full bg-blue-500 disabled:bg-gray-500 border-2 border-blue-700 py-1 rounded-lg  text-white'
          disabled={loading} // if loading true then disabled is also true, jb tak loading true he tab tak disable bi true hoga 
          >{loading ? "Loading..." : "Login"}</button>
          <p className='text-center'>Don't have an account <br /> <Link to ="/signup" className='text-blue-500 underline font-bold'>sign up</Link> </p>
      </form>
      ):( // addd loading in verify otp too... 
        <form
        onSubmit={handleVerifyOtp}
        className='flex flex-col gap-4 border-2 border-gray-200 rounded-lg p-4 shadow-2xl'
      >
        <div>
          <h1 className='text-2xl font-bold flex item-center justify-center'>Verify OTP 👋</h1>
          <p>Your otp is: {otp}</p>
          <input
            type="text"
            name="otp"
            placeholder='Enter otp here'
            className='border border-gray-300 rounded-lg px-2 py-1 mt-2'
            value={formdata.otp}
            onChange={handleChange}
          />
        </div>
        <button type='submit' disabled={loading} className='w-full bg-blue-500 disabled:bg-gray-500 border-2 border-blue-700 py-1 rounded-lg  text-white'>{loading? "loading" :"Verify OTP" }</button>
      </form>
      )}
    </div>
  )
}

export default LoginPage