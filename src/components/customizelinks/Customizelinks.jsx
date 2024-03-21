import React, { useState } from "react";
import facebook from "../../assets/facebook.jpeg";
import instagram from "../../assets/instagram.jpeg";
import telegram from "../../assets/telegram.jpeg";
import twitter from "../../assets/facebook.jpeg";
import linkedin from "../../assets/facebook.jpeg";
import snapchat from "../../assets/facebook.jpeg";
import whatsapp from "../../assets/whatsapp.png";
import youtube from "../../assets/youtube.png";

const Customizelinks = ({ setLinks, links }) => {

  const linksArray = [
    {
      id: 1,
      logo: facebook,
      color:'blue',
      name: "Facebook",
    },
    {
      id: 2,
      logo: instagram,
      color:'yellow',
      name: "Instagram",
    },
    {
      id: 3,
      logo: whatsapp,
      color:'green',
      name: "WhatsApp"
    },
    {
      id: 4,
      logo: telegram,
      color:'pink',
      name: "Telegram"
    },
    {
      id: 5,
      logo: youtube,
      color:'red',
      name: "YouTube"
    },
  ];

  const [linkTag, setLinkTag] = useState('');
  const [isValidLink, setIsValidLink] = useState(true);

  // const handleChange = (event) => {
  //   const inputValue = event.target.value;
  //   setLinkTag(inputValue);
  //   // Validate the input value using a regular expression
  //   const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);
  //   setIsValidLink(isValid);
  // };



  const [socialLinks, setSocialLinks] = useState([]);

  const handleCreateTemplateDev = () => {
    const newDropdowns = [...socialLinks];
    newDropdowns.push({ selectedOption: '', inputValue:'', bgColor : '' });
    setSocialLinks(newDropdowns);
  }

  // const handleLinkChange = (index, e, field) => {
  //   const { value } = e.target;
  //   const newDropdowns = [...socialLinks];
  //   if(field === 'logo'){
  //     newDropdowns[index].selectedOption = value;
  //   }else if(field === 'link'){
  //     newDropdowns[index].inputValue = value
  //   }
  //   setSocialLinks(newDropdowns);
  // };

  const handleInputChange = (index, e, field) => {
    const { value } = e.target;
    const newDropdowns = [...socialLinks];
    
    if (field === 'logo') {
      setLinkTag(value);
    } else if (field === 'link') {
      setLinkTag(value);
      newDropdowns[index].inputValue = value;
    }
    
    // Validate the input value using a regular expression
    const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(value);
    setIsValidLink(isValid);
    
    setSocialLinks(newDropdowns);
  };
  


  const removeLinkDiv = (index) => {
    const newDropdowns = [...socialLinks];
    newDropdowns.splice(index, 1);
    setSocialLinks(newDropdowns);
  };

  const saveLinks = (event) => {
    event.preventDefault();
    if (isValidLink) {
      console.log('Link is valid:', linkTag);

      // Perform additional actions here, such as submitting the form

      localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
      console.log("Social links saved to local storage:", socialLinks);
    } else {

      // Handle invalid input, such as displaying an error message

      console.log('Invalid link:', linkTag);
      
    }

  };

  return (
    <div>
      <div className="px-[2rem] py-[2rem] w-[100%] h-[580px] m-5 bg-purple-50 rounded-md shadow-md shadow-slate-200">
        <div className="py-[1rem] rounded-md shadow-gray-500">
          <h2 className="font-bold text-[25px] text-gray-700">Customize your links</h2>

          <p className="text-[12px] pb-[15px] pt-[5px] text-gray-700">Add/edit/remove links below and then share all your profit with the whole!</p>

          <button  onClick={handleCreateTemplateDev} className="text-[13px] font-bold text-purple-700 w-[100%] py-[9px] px-[20px] rounded-[6px]" style={{ border: "1px solid purple" }}> {" "}+ Add new link</button>
          {/* <button onClick={handleCreateTemplateDev} className="text-[13px] font-bold text-purple-700 w-[100%] py-[9px] px-[20px] rounded-[6px]" style={{ border: "1px solid purple" }}> {" "}+ Add new link</button> */}
        </div>


        <div className="container max-h-[390px] overflow-y-auto">
          {socialLinks.map((link, index) => (
            <div key={index} className="pb-[50px] border-black">
              <div className="flex justify-between text-[10px] py-[5px] text-gray-700 font-bold">
                <p>= Link #{index + 1}</p>
                <button  onClick={removeLinkDiv} className="text-gray-400 text-[15px]">Remove</button>
              </div>

              <div>
                <p className="text-[10px] py-[3px] font-semibold text-gray-700">Perform</p>
                <select className="w-full bg-transparent border py-1 px-2 rounded"
            value={link.selectedOption}
            onChange={(e) => handleLinkChange(index, e, 'logo')}
          >
            <option value="">Select an option</option>
            {
              linksArray.map(social => (
                <>
                  <img src={social.logo} alt="" />
                  <option value={social.name}>{social.name}</option>
                </>
              ))
            }
          </select>

                {/* <div className="relative flex items-center justify-between px-3 py-2 w-[100%] border rounded-[7px]">

                  <div className="flex items-center gap-1">
                    <img src={selectedMedia.logo} className="h-[20px] w-[20px]" alt=""  />
                    <button className="text-[12px] py-[2px] rounded-sm">{selectedMedia.name}</button>
                  </div>

                  <div>
                    <i className="text-black cursor-pointer ri-arrow-down-s-line text-2xl" onClick={() => setShowLinksDropDown(index)}></i>
                  </div>
                  
                </div> */}
              </div>

              <div>
                <p className="pt-[12px] pb-[5px] text-[10px] font-semibold text-gray-700">Link</p>

                  <div className="flex gap-1 items-center justify-between px-3 py-2 w-[100%] border rounded-[7px]">
                    <i className="ri-links-fill"></i>
                    <input onChange={(e) => handleInputChange(index, e, 'link')}
                        type="text"
                        value={linkTag}
                        className="w-[100%] rounded-sm outline-none bg-purple-50 "/>
                  </div>
                </div>

                {!isValidLink && <p style={{ color: 'red' }}>Please enter a valid link</p>}
            </div>
          ))}
        </div>
      </div>
      <button className="bg-green-600 py-1 px-3 rounded text-white" onClick={saveLinks}>Saveeee</button>
    </div>
  );
}

export default Customizelinks;
