import React from 'react'

function UserInfoCard() {
  return (
    <div className='p-4 w-auto pt-10'>
      <div className='border-[1px] border-gray-100 flex shadow-sm space-y-5 rounded-2xl p-8 flex-col items-center' >
        <img className='rounded-xl w-40' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="user" />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-xl'>Prabhleen Kaur</h1>
          <p className='text-gray-500 font-medium'>prabhleenkaur@gmail.com</p>
          <p className='text-gray-500 font-medium'>9982939283</p>
          <p className='text-gray-500 font-medium mt-3'>Delhi, India</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard