import React, { useState } from 'react'
import Alert from '../alertModal/Alert';

const Profile = ({email, setEmail, firstName, setFirstName, lastName, setLastName}) => {

  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('');
  const [alertType, setAlertType] = useState('');


    const [dataArray] = [
        {            
            'firstname': firstName,
            'lastname': lastName,
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
                <input type="file" accept='.jpg, .png, .jpeg' />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=" alt="" />
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
            
            msg && <Alert alertType={alertType} setMsg={setMsg} msg={msg} />
        }

        <div className='flex justify-end items-end'>
            <button onClick={handleSave} className='flex justify-end items-end px-[30px] py-[10px] mr-[-25px] border rounded-md text-white bg-purple-500 hover:bg-purple-100 hover:text-purple-700'>Save</button>
        </div>
    </div>
  )
} 

export default Profile