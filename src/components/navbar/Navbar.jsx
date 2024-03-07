import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <div>
            <i class="ri-link"></i>
            <h2>Devlinks</h2>  
        </div>
        <div className='flex gap-10'>
            <button className='text-purple-700'><i class="ri-links-line"></i>Links</button>
            <div className='flex'>
                <i class="ri-user-3-line"></i>
                <h2>Profile Details</h2>
            </div>
        </div>   
        <button>Preview</button>
    </nav>
  )
}

export default Navbar