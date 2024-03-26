import React from 'react'

const Button = ({ saveLinks }) => {
  return (
    <div className='flex justify-end items-end'>
      <button
      onClick={saveLinks}
      className='flex justify-end items-end px-[30px] py-[10px] mr-[-25px] border rounded-md text-white bg-purple-500 hover:bg-purple-100 hover:text-purple-700'>Save</button>
    </div>
  )
}

export default Button