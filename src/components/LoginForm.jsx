import React from 'react'
import AccountSettings from './AccountSettings';

const LoginForm = () => {
  const [login, setLogin] = React.useState(false);

  if(login){
    return <AccountSettings/>
  }
  return (
    <div className='w-full h-screen bg-[#F7F8F9] px-5 pt-10'>
        <h1 className='w-[70%] text-[1.75rem]/[2.25rem] text-start font-medium mb-[0.875rem]'>Signin to your PopX account</h1>
        <p className='w-[80%] text-start text-[#1D2226]/60 text-[1.125rem] mb-[1.8125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form className='flex flex-col gap-3 '>
          <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 px-3 bg-[#F7F8F9]'>Email Address</label>
            <input type="text" placeholder='Email' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none'/>
          </div>
          <div className='relative pt-2'>
          <label className=' text-[#6C25FF]/60 absolute top-[0.0625rem] font-normal text-[0.8125rem] mx-3 z-10 pl-3 pr-8 bg-[#F7F8F9]'>Password</label>
            <input type="password" placeholder='Password' className='w-full h-10 rounded-md border border-[#DDE1E6] px-4 text-[1rem] outline-none'/>
          </div>
            <button type='login' onClick={()=>{setLogin(true)}} className='w-full py-[0.8206rem] bg-[#CBCBCB] text-white text-[1rem] rounded-md mt-2 cursor-pointer'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm