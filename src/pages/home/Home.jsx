import React, { useState } from 'react'
import Phone from '../../components/phonecomponent/Phone';
import Customizelinks from '../../components/customizelinks/Customizelinks';
import Button from '../../components/button/Button';

const Home = () => {
    const [number, setNumber] = useState(0);
    const [addLink, setAddLink] = useState(0);
    const [inputValue, setInputValue] = useState('')


    const saveLinks = () => {
      console.log(inputValue)
    }

  return (
    <div className='flex justify-center'>
      <Phone />
      
      <div className='flex-col w-[50%]'>
        <Customizelinks setInputValue={setInputValue} />

        <Button saveLinks={saveLinks}/>
      </div> 

    </div>
   )
}

export default Home;