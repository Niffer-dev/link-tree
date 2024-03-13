import React, { useState } from 'react'
import Phone from '../../components/phonecomponent/Phone';
import Customizelinks from '../../components/customizelinks/Customizelinks';

const Home = () => {
    const [number, setNumber] = useState(0);
    const [addLink, setAddLink] = useState(0);

  return (
    <div className='flex justify-center'>
        <Phone />
        
        <Customizelinks />

    </div>
   )
}

export default Home;