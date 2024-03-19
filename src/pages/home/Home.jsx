import React, { useState } from 'react'
import Phone from '../../components/phonecomponent/Phone';
import Customizelinks from '../../components/customizelinks/Customizelinks';
import Button from '../../components/button/Button';
import Testing from '../../components/testing/Testing';
import Alert from '../../components/alertModal/Alert';

const Home = () => {
    const [number, setNumber] = useState(0);
    const [addLink, setAddLink] = useState(0);
    const [inputValue, setInputValue] = useState('')


    const [links, setLinks] = useState([]);

    function getInputs() {
      links.map(val => {
        console.log(val);
      });
    }

  return (
    <div className='flex justify-center'>
      <Phone />
      
      <div className='flex-col w-[50%]'>
        <Customizelinks links={links} setLinks={setLinks}/>

        <Button getInputs={getInputs}/>
      </div> 
      
      <Alert/>
      
    </div>
   )
}

export default Home;