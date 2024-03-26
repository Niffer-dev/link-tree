import React, { useState } from 'react'
import Phone from '../../components/phonecomponent/Phone';
import Customizelinks from '../../components/customizelinks/Customizelinks';
import Button from '../../components/button/Button';
import Testing from '../../components/testing/Testing';
import Alert from '../../components/alertModal/Alert';
import Dropdown from '../../components/dropdown/Dropdown';

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

    const saveLinks = (event) => {
      event.preventDefault();
      if (isValidLink) {
        console.log('Link is valid:', linkTag);

       // Retrieve existing social links from local storage
       let storedLinks = JSON.parse(localStorage.getItem('socialLinks')) || [];

       // Merge new social links with existing ones
       const updatedLinks = [...storedLinks, ...socialLinks];

       // Store the updated social links in local storage
       localStorage.setItem('socialLinks', JSON.stringify(updatedLinks));

       console.log("Social links saved to local storage:", updatedLinks);
      } else {

        // Handle invalid input, such as displaying an error message

        console.log('Invalid link:', linkTag);
        
      }

    };



  return (
    <div className='flex justify-center'>
      <Phone />
      
      <div className='flex-col w-[50%]'>
        <Customizelinks links={links} setLinks={setLinks}/>

      </div>
    </div>
   )
}

export default Home;