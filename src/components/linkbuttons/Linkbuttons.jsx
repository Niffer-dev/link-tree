import React from 'react'

const Linkbuttons = () => {
  return (
    <div className='mt-[2rem] flex flex-col justify-center items-center text-white'>
        <div className='flex-col item-center text-center justify-between w-[100%]'>

            <div className='flex justify-between p-[10px] bg-[#000] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                <button><i class="ri-github-fill text-white mr-1"></i>Github</button>
                <i class="ri-arrow-right-line text-white"></i>
            </div>

            <div className='flex justify-between p-[10px] bg-[red] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                <button><i class="ri-youtube-line mr-1"></i>Youtube</button>
                <i class="ri-arrow-right-line"></i>
            </div>

            <div className='flex justify-between p-[10px] bg-green-500 w-[80%] mx-[25px] rounded-md mb-[20px]'>
                <button><i class="ri-whatsapp-line mr-1"></i>WhatsApp</button>
                <i class="ri-arrow-right-line"></i>
            </div>

            <div className='flex justify-between p-[10px] bg-blue-700 w-[80%] mx-[25px] rounded-md'>
                <button><i class="ri-linkedin-box-line mr-1"></i>LinkedIn</button>
                <i class="ri-arrow-right-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Linkbuttons