import React, { useState } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm';

const HomePage = () => {

    const [Page, setPage] = useState("home");

    if(Page === "signup"){
        return <SignupForm/>
    }
    else if(Page === "login"){
        return <LoginForm/>
    }
  return (
    <div className='w-full h-screen flex flex-col justify-end bg-[#F7F8F9] px-5 pb-10'>
            <h1 className='text-[1.75rem]/[1.0625rem] font-medium mb-2.5'>Welcome to PopX</h1>
            <p className='w-[70%] text-start text-[#1D2226]/60 text-[1.125rem] mb-[1.8125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button onClick={()=>{setPage("signup")}} className='bg-[#6C25FF] text-white text-center rounded-md mb-[0.625rem]'>
                <div className='py-[0.8225rem] font-medium text-[1rem]/[1.0625rem] cursor-pointer'>Create Account</div>
            </button>
            <button onClick={()=>{setPage("login")}} className='bg-[#6C25FF4B] text-black text-center rounded-md '>
                <div className='py-[0.8225rem] font-medium text-[1rem]/[1.0625rem] cursor-pointer'>Already Registered? Login</div>
            </button>
        
    </div>
  )
}

export default HomePage