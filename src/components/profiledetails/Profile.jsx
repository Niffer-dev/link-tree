import React, { useState } from 'react'
import Alert from '../alertModal/Alert';

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('');
    const [alertType, setAlertType] = useState('');

    const [dataArray] = [
        {            
            'firstname': firstName,
            'lastName': lastName,
            'email': email
        }
    ]

    const handleSave = () => {

        // Profile Validation

        if(firstName === '' || lastName === '' || email === ''){
            setMsg('Please fill in all fields')
            setAlertType('error')
        } else if (!validateEmail(email)) {
            setMsg('Please enter a valid email address');
            setAlertType('error');
        } else {

            // Setting the items to the local storage

            const dataArrayJSON = JSON.stringify(dataArray);

            localStorage.setItem('dataArray', dataArrayJSON);

            console.log(dataArray.email);
        }
    }

    const validateEmail = (inputedEmail) => {
        // Regular expression for email validation

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputedEmail);
    }

  return (
    <div>
        <div className="px-[2rem] py-[1rem] w-[100%] h-[580px] m-5 bg-purple-50 rounded-md shadow-md shadow-slate-200">
            <div className="py-[1rem] rounded-md shadow-gray-500">
                <h2 className="font-bold text-[25px] text-gray-700">Profile Details</h2>
                <p className="text-[12px] pb-[15px] pt-[5px] text-gray-700">Add your details to create a personal touch to your profile.</p>
            </div>

            <div className='flex items-center gap-10 bg-gray-50 px-[1rem] py-[1rem] shadow-md shadow-slate-100'>
                <p className='text-[13px] text-gray-700'>Profile picture</p>
                <div className=' rounded-lg bg-stone-700 mt-[4px] mx-auto h-[120px] w-[120px]'></div>
            </div>

            <div className='mt-4 bg-gray-50 px-[1rem] py-[1rem] shadow-md shadow-slate-100'>
                <div className='flex justify-between'>
                    <p className='text-[13px]'>First name</p>
                    <input onChange={(e) => {setFirstName(e.target.value)}} type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
                <div className='flex justify-between my-5'>
                    <p className='text-[13px]'>Last name</p>
                    <input onChange={(e) => {setLastName(e.target.value)}} type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[13px]'>Email</p>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" className='px-[15px] py-[5px] w-auto shadow-slate-300 shadow-sm'/>
                </div>
            </div>
        </div>
        
        {
            // call the Alert modal if theres an error
            
            msg && <Alert alertType={alertType} setMsg={setMsg} />
        }

        <div className='flex justify-end items-end'>
            <button onClick={handleSave} className='flex justify-end items-end px-[30px] py-[10px] mr-[-25px] border rounded-md text-white bg-purple-500 hover:bg-purple-100 hover:text-purple-700'>Save</button>
        </div>
    </div>
  )
}

export default Profile