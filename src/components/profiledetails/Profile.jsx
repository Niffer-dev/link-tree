import React from 'react'

const Profile = () => {
  return (
    <div>
        <div className="px-[2rem] py-[1rem] w-[100%] h-[580px] m-5 bg-purple-50 rounded-md shadow-md shadow-slate-200">
            <div className="py-[1rem] rounded-md shadow-gray-500">
                <h2 className="font-bold text-[25px] text-gray-700">Profile Details</h2>
                <p className="text-[12px] pb-[15px] pt-[5px] text-gray-700">Add your details to create a personal touch to your profile.</p>
            </div>

            <div className='flex items-center gap-10 bg-gray-50 px-[1rem] py-[1rem] shadow-md shadow-slate-100'>
                <p className='text-[13px] text-gray-700'>Profile picture</p>
                <div className=' rounded-lg bg-stone-700 mt-[4px] mx-auto h-[120px] w-[120px]'></div>
            </div>

            <div className='mt-4 bg-gray-50 px-[1rem] py-[1rem] shadow-md shadow-slate-100'>
                <div className='flex justify-between'>
                    <p className='text-[13px]'>First name</p>
                    <input type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
                <div className='flex justify-between my-5'>
                    <p className='text-[13px]'>Last name</p>
                    <input type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[13px]'>Email</p>
                    <input type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile