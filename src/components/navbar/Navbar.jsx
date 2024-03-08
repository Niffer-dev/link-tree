import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[5rem] py-[1rem] bg-purple-50'>
        <div className='flex gap-1 font-bold'>
            <i class="ri-link"></i>
            <h2 className='font-serif'>Devlinks</h2>  
        </div>
        <div className='flex justify-between items-center gap-10'>
            <button className='text-purple-700 bg--200 text-[13px] flex gap-1 bg-purple-100 px-[18px] py-[5px] rounded-md text-bold'><i class="ri-links-line"></i>Links</button>
            <div className='flex gap-1 items-center'>
                <i class="ri-user-3-line"></i>
                <h2 className='text-[13px]'>Profile Details</h2>
            </div>
        </div>   
        <button className='text-[14px] text-purple-700 px-[20px] py-[5px] rounded-md text-semibold' style={{border: '1px solid purple'}}>Preview</button>
    </nav>
  )
}

export default Navbar