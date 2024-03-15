import React from 'react'
import Linkbuttons from '../linkbuttons/Linkbuttons'

const Phone = () => {
  return (
    <div>
        <div className="w-[270px] mt-[15px] rounded-[50px] border-2 h-[80vh] flex items-center justify-center relative">
            <div className="w-[250px] rounded-[50px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">
                <div className='bg-white rounded-[6px] h-[25px] w-[115px] absolute top-[16px] left-[80px] border-x-2 border-b-2'>
                </div>

                <div className='flex items-center justify-center  w-full'>
                    <div className=' rounded-full bg-[#ccc] mt-[4px] mx-auto h-[100px] w-[100px]'></div>
                </div>

                <Linkbuttons/>
            </div>
        </div>
    </div>
  )
}

export default Phone