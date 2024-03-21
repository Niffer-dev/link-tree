import React, { useState } from 'react'
import Phone from '../../components/phonecomponent/Phone'
import Profile from '../../components/profiledetails/Profile'
import Button from '../../components/button/Button'

const Userprofile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [socialLinks, setSocialLinks] = useState([]);


  return (
    <div className='flex justify-center'>
       <Phone firstName={firstName} lastName={lastName} email={email}  socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>

        <div>
          <Profile firstName={firstName} lastName={lastName} email={email} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail}/>

          {/* <Button /> */}
        </div>
    </div>
  )
}

export default Userprofile