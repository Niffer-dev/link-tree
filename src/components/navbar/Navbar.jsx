import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-[5rem] py-[1rem] bg-purple-50'>
        <div className='flex gap-1 font-bold'>
            <i class="ri-link"></i>
            <h2 className='font-serif'>Devlinks</h2>  
        </div>
        {/* <div className='flex justify-between items-center gap-10'>
            <button className='text-purple-700 bg--200 text-[13px] flex gap-1 bg-purple-100 px-[18px] py-[5px] rounded-md text-bold'><i class="ri-links-line"></i>Links</button>
            <div className='flex gap-1 items-center'>
                <i class="ri-user-3-line"></i>
                <h2 className='text-[13px] cursor-pointer'>Profile Details</h2>
            </div>
        </div> */}
        <div className='flex justify-between list-none items-center gap-5 font-semi-bold'>
            <li>
              <Link to='/' className='flex gap-1 bg--200 text-[13px] px-[18px] py-[5px] hover:bg-purple-100 hover:text-purple-700 rounded-md'><i class="ri-links-line"></i>Link</Link>
            </li>
            <li>
              <Link to='/userprofile' className='flex gap-1 text-[13px] px-[20px] py-[10px] rounded-md cursor-pointer hover:bg-purple-100 hover:text-purple-700'><i class="ri-user-3-line"></i>Profile Details</Link>
            </li>
        </div>   
        <button className='text-[14px] text-purple-700 px-[20px] py-[5px] rounded-md text-semibold' style={{border: '1px solid purple'}}>Preview</button>
    </nav>
  )
}

export default Navbar