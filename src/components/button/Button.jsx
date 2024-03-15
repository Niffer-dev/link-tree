import React from 'react'

const Button = ({getInputs}) => {
  return (
    <div className='flex justify-end items-end'>
      <button onClick={() => getInputs()} className='flex justify-end items-end px-[30px] py-[10px] mr-[-25px] border rounded-md text-white bg-purple-500'>Save</button>
    </div>
  )
}

export default Button