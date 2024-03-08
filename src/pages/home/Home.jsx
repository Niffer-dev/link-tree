import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className="w-[270px] mt-5 rounded-[50px] border-2 h-[80vh] flex items-center justify-center relative">
            <div className="w-[250px] rounded-[50px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">
                <div className='bg-white rounded-[6px] h-[22px] w-[100px] absolute top-[10px] border-x-2 border-b-2'>
                </div>
                <div className='flex items-center justify-center bg-black h-[90px] w-full'>
                    <div className=' rounded-full bg-white mt-[2rem] mx-auto h-[80px] w-[80px]'>
                </div>
                </div>
                <div className='mt-[8rem] flex flex-col justify-center items-center'>
                    <div className='flex item-center justify-between'>
                        <div>
                            <button><i class="ri-github-fill"></i>Github</button>
                        </div>
                        <div>
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div>
                        <button><i class="ri-youtube-line"></i>Youtube</button>
                        <i class="ri-arrow-right-line"></i>
                    </div>
                    <div>
                        <button><i class="ri-linkedin-box-line"></i>LinkedIn</button>
                        <i class="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-[2rem] py-[2rem] w-[45%] m-5 bg-purple-50'>
            <div className='py-[1rem] rounded-md shadow-gray-500'>
                <h2 className='font-bold text-[25px] text-gray-700'>Customize your links</h2>
                <p className='text-[12px] pb-[15px] pt-[5px] text-gray-700'>Add/edit/remove links below and then share all your profit with the whole!</p>
                <button className='text-[11px] font-bold text-purple-700 w-[100%] py-[5px] px-[20px] rounded-sm' style={{border: '1px solid purple'}}> + Add new link</button>
            </div>
            <div className='bg-white py-[1rem] px-[1rem] rounded-md shadow-gray-500'>
                <div className='flex justify-between text-[10px] py-[5px] text-gray-700 font-bold'>
                    <h2>=Link #1</h2>
                    <p>Remove</p>
                </div>
                <div>
                    <p className='text-[10px] py-[3px] font-semibold text-gray-700'>Perform</p>
                    <button className='text-[12px] w-[100%] py-[2px] rounded-sm shadow-slate-300 shadow-sm'>Github</button>
                </div>
                <div>
                    <p className=' pt-[12px] pb-[5px] text-[10px] font-semibold text-gray-700'>Link</p>
                    <input type="text" className='w-[100%] rounded-sm shadow-slate-300 shadow-sm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home