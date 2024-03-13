import React from 'react'

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

                <div className='mt-[2rem] flex flex-col justify-center items-center text-white'>
                    <div className='flex-col item-center text-center justify-between w-[100%]'>
                        <div className='flex justify-between p-[10px] bg-[#000] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button className='text-white'><i class="ri-github-fill text-white"></i>Github</button>
                            <i class="ri-arrow-right-line text-white"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-[red] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button><i class="ri-youtube-line"></i>Youtube</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-green-500 w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button><i class="ri-whatsapp-line"></i>WhatsApp</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-blue-700 w-[80%] mx-[25px] rounded-md'>
                            <button><i class="ri-linkedin-box-line mr-1"></i>LinkedIn</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Phone