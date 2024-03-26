import React from 'react'
import Linkbuttons from '../../components/linkbuttons/Linkbuttons'

const Preview = () => {



    const user = JSON.parse(localStorage.getItem('dataArray'))

  return (
    <div>
        <div className=' bg-blue-700 h-[250px] rounded-bl-2xl rounded-br-2xl'>
        </div>
            <div className="w-[260px] mx-auto my-[-5rem] rounded-[30px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">

                <div className='flex items-center justify-center  w-full'>
                    {
                        user ? 
                        <img src={user && user.profileImg} className='rounded-full mt-[4px] mx-auto h-[100px] w-[100px]' alt="" />
                        :
                        <>
                            <div className=' rounded-full bg-neutral-800 mt-[4px] mx-auto h-[100px] w-[100px]'></div>
                            <div className=' text-center py-[20px]'>
                    <h3 className='py-[6px] w-[80%] rounded-full mx-auto bg-[red]'></h3>
                    <p className='py-[6px] mt-4 w-[40%] rounded-full mx-auto bg-[#ccc]'></p>
                </div>
                        </>
                    
                    
                    }

                    {/* <div className=' rounded-full  mt-[4px] mx-auto h-[100px] w-[100px]'></div> */}
                </div>

{
    user &&
                <div className=' text-center py-[20px]'>
                    <h3 className=' font-bold text-[25px] pb-[10px] text-gray-800'>{user.firstname} {user.lastname}</h3>
                    <p className='text-[12px]'>{user.email}</p>
                </div>
}

                <Linkbuttons/>
            </div>
    </div>
  )
}

export default Preview