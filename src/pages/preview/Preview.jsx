import React from 'react'
import Linkbuttons from '../../components/linkbuttons/Linkbuttons'

const Preview = () => {

    // const getFromLocalStorage = () => {
    //     const dataArrayJSON = localStorage.getItem('dataArray');
    //     const retrievedDataArray = JSON.parse(dataArrayJSON);
    
    //     console.log(retrievedDataArray);
    // }

    // getFromLocalStorage()

    const user = JSON.parse(localStorage.getItem('dataArray'))

  return (
    <div>
        <div className=' bg-blue-700 h-[250px] rounded-bl-2xl rounded-br-2xl'>
        </div>
            <div className="w-[260px] mx-auto my-[-5rem] rounded-[30px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">

                <div className='flex items-center justify-center  w-full'>
                    <div className=' rounded-full bg-neutral-800 mt-[4px] mx-auto h-[100px] w-[100px]'></div>
                </div>

                <div className=' text-center py-[20px]'>
                    <h3 className=' font-bold text-[25px] pb-[10px] text-gray-800'>{user.firstname} {user.lastname}</h3>
                    <p className='text-[12px]'>{user.email}</p>
                </div>

                <Linkbuttons/>
            </div>
    </div>
  )
}

export default Preview