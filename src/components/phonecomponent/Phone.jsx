import React from 'react'
import Linkbuttons from '../linkbuttons/Linkbuttons'

const Phone = ({firstName, lastName, email}) => {

  const user = JSON.parse(localStorage.getItem('dataArray'))

  return (
    <div>
        <div className="w-[270px] mt-[15px] rounded-[50px] border-2 h-[80vh] flex items-center justify-center relative shadow-md shadow-slate-200">
            <div className="w-[250px] rounded-[50px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">
                <div className='bg-white rounded-[6px] h-[25px] w-[115px] absolute top-[16px] left-[80px] border-x-2 border-b-2'>
                </div>

                <div className='flex items-center justify-center  w-full'>
                    <div className=' rounded-full bg-[#ccc] mt-[4px] mx-auto h-[100px] w-[100px]'></div>
                </div>

              {user ?
                  <div className=' text-center py-[20px]'>
                    <h3 className=' font-bold text-[25px] pb-[10px] text-gray-800'>{user.firstname} {user.lastname}</h3>
                    <p className='text-[12px]'>{user.email}</p>
                </div>
                :
                <div className=' text-center py-[20px]'>
                    <h3 className='py-[6px] w-[80%] rounded-full mx-auto bg-[#ccc]'></h3>
                    <p className='py-[6px] mt-4 w-[40%] rounded-full mx-auto bg-[#ccc]'></p>
                </div>
                }

                <Linkbuttons/>
            </div>
        </div>
    </div>
  )
}

export default Phone