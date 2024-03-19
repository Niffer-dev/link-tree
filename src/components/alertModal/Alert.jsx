import React from 'react'

const Alert = ({ alertType, setMsg, msg}) => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center' style={{ backgroundColor:"rgba(18,18,18, 0.8)" }}>
            <div className='flex-col gap-[40px] border text-center items-center w-[40%] h-[350px] bg-white rounded-lg px-[25px] py-[30px]'>

                {
                    alertType === 'error' ? <i class="ri-close-large-fill text-[100px] text-center inline-flex text-red-700"></i> : <i class="ri-checkbox-circle-line text-7xl text-center inline-flex text-green-700"></i>
                }

                <p className='mt-[20px] text-xl text-black'>{msg}</p>
                <button className='mt-[30px] text-white bg-red-700 px-[12px] py-[5px] rounded-xl' onClick={() => setMsg(false)}>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Alert