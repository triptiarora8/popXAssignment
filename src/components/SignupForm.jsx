import React from 'react'
import LoginForm from './LoginForm';

const SignupForm = () => {
  const [Page, setPage] = React.useState("signup");

  if(Page === "login"){
    return <LoginForm />
  }
  return (
    <div className='w-full h-screen bg-[#F7F8F9] flex flex-col px-[1.25rem] pt-10 gap-4'>
      <h1 className='w-[70%] text-[1.75rem]/[2.25rem] font-bold'>Create your PopX account</h1>
      <div className='w-full h-[2px] bg-[#E0E0E0]'>
      </div>
      <form className='flex flex-col gap-3 '>
        <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 px-3 bg-[#F7F8F9]'>Full Name</label>
          <input type="text" placeholder='Full Name' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none' />
        </div>
        <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 px-3 bg-[#F7F8F9]'>Phone Number</label>
          <input type="text" placeholder='Phone Number' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none' />
        </div>
        <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 px-3 bg-[#F7F8F9]'>Email Address</label>
          <input type="text" placeholder='Email' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none' />
        </div>
        <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 pl-3 pr-8 bg-[#F7F8F9]'>Password</label>
          <input type="password" placeholder='Password' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none' />
        </div>
        <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 px-3 bg-[#F7F8F9]'>Company name</label>
          <input type="text" placeholder='Company name' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none' />
        </div>
        <div className='relative pt-2'>
          <h2 className='text-[#1D2226]/60 text-[0.875rem]'>
            Are you an Agency?
          </h2>

          <div className='flex items-center gap-4 mt-2'>
            <label className='inline-flex items-center'>
              <input
                type="radio"
                name="agency"
                value="yes"
                className='h-4 w-4 accent-[#6C25FF]'
              />
              <span className='ml-2 text-[#1D2226]/60 text-[0.875rem]'>
                Yes
              </span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type="radio"
                name="agency"
                value="no"
                className='h-4 w-4 accent-[#6C25FF]'
              />
              <span className='ml-2 text-[#1D2226]/60 text-[0.875rem]'>
                No
              </span>
            </label>
          </div>
        </div>

        <button onClick={()=>{setPage("login")}} className='w-full h-10 bg-[#6C25FF] text-white rounded-md mt-4'>Sign Up</button>
      </form>
      <div className='flex justify-center text-[#1D2226]/60 text-[0.875rem]'>
        <p>Already have an account? <span onClick={()=>{setPage("login")}} className='text-[#6C25FF] cursor-pointer'>Login</span></p>
      </div>
    </div>
  )
}

export default SignupForm