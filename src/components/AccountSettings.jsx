import React from 'react'

const AccountSettings = () => {
  return (
    <div className='w-full h-screen bg-[#F7F8F9] '>
        <h1 className='bg-white w-full pl-[0.9375rem] py-[1.25rem] text-[1.125rem]/[1.3125rem] font-medium'>Account Settings</h1>
        <div className='bg-[#F7F8F9]  h-screen p-6  w-fit border-gray-100'>
            <div className='flex items-center space-x-4 mb-4'>
                <div className='w-16 h-16 relative '>
                    <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='Profile' className='w-full h-full rounded-full object-cover'/>
                    <div className='absolute bottom-0 right-0 bg-[#6C25FF] w-5 h-5 rounded-full flex items-center justify-center text-white text-xs cursor-pointer'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
                    </div>
                </div>
                    <div>
                        <h2 className='text-[1.125rem]/[1.3125rem] font-medium'>John Doe</h2>
                        <p className='text-[#1D2226]/60 text-[0.875rem]/[1.0625rem] font-medium'>johndoe@example.com</p>
                    </div>

            </div>
            <p className='text-[0.875rem]/[1.375rem]'>
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
        </div>
  )
}

export default AccountSettings  