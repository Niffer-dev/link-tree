import React from 'react'
import Phone from '../../components/phonecomponent/Phone'
import Profile from '../../components/profiledetails/Profile'
import Button from '../../components/button/Button'

const Userprofile = () => {
  return (
    <div className='flex justify-center'>
       <Phone />

        <div>
          <Profile />

          <Button />
        </div>
    </div>
  )
}

export default Userprofile