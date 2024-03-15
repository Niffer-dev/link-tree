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
  const [templateDivs, setTemplateDivs] = useState([]);
  const [linksDropDown, setLinksDropDown] = useState(false);


  const [selectedMedia, setSelectedMedia] = useState({
    logo: facebook,
    name: "Facebook",
  });


  const linksArray = [
    {
      id: 1,
      logo: facebook,
      name: "Facebook",
    },
    {
      id: 2,
      logo: instagram,
      name: "Instagram",
    },
    {
      id: 3,
      logo: whatsapp,
      name: "WhatsApp"
    },
    {
      id: 4,
      logo: telegram,
      name: "Telegram"
    },
    {
      id: 5,
      logo: youtube,
      name: "YouTube"
    },
  ];


  const removeParent = (event) => {
    const parentElement =
      event.target.parentElement.parentElement;
    parentElement.remove();
  };

  const handleCreateTemplateDev = () => {
    setLinks([...links, {
      linkLogo: '',
      linkText: ''
    }])
  }


  
  function updateOdd(value, index, field) {
    const newLinks = [...links];
    if (field === 'linkLogo') {
      newLinks[index].linkLogo = value;
    } else if (field === 'linkText') {
      newLinks[index].linkText = value;
    }
    setLinks(newLinks);
  }

  const getInput = () => {
    links.map(val => {
      console.log(val);
    })
  }





  return (
    <div>
      <div className="px-[2rem] py-[2rem] w-[100%] h-[580px] m-5 bg-purple-50 rounded-md">
        <div className="py-[1rem] rounded-md shadow-gray-500">
          <h2 className="font-bold text-[25px] text-gray-700">Customize your links</h2>

          <p className="text-[12px] pb-[15px] pt-[5px] text-gray-700">Add/edit/remove links below and then share all your profit with the whole!</p>

          <button onClick={handleCreateTemplateDev} className="text-[13px] font-bold text-purple-700 w-[100%] py-[9px] px-[20px] rounded-[6px]" style={{ border: "1px solid purple" }}> {" "}+ Add new link</button>
        </div>


        <div className="container max-h-[390px] overflow-y-auto ">
          {links.map((odd, index) => (
            <div key={index} className="pb-[50px] border-black">
              <div className="flex justify-between text-[10px] py-[5px] text-gray-700 font-bold">
                <p>= Link #1</p>
                <button  onClick={removeParent} className="text-gray-400 text-[15px]">Remove</button>
              </div>

              <div>
                <p className="text-[10px] py-[3px] font-semibold text-gray-700">Perform</p>

                <div className="relative flex items-center justify-between px-3 py-2 w-[100%] border rounded-[7px]">

                  <div className="flex items-center gap-1">
                    <img src={selectedMedia.logo} className="h-[20px] w-[20px]" alt=""  />
                    <button className="text-[12px] py-[2px] rounded-sm">{selectedMedia.name}</button>
                  </div>

                  <div>
                    <i className="text-black cursor-pointer ri-arrow-down-s-line text-2xl"></i>
                  </div>
                </div>
              </div>

              <div>
                <p className="pt-[12px] pb-[5px] text-[10px] font-semibold text-gray-700">Link</p>

                  <div className="flex gap-1 items-center justify-between px-3 py-2 w-[100%] border rounded-[7px]">
                    <i className="ri-links-fill"></i>
                    <input onChange={(e) => {
                        const value = e.target.value;
                        updateOdd(value, index, 'linkText');
                        }}
                        type="text"
                        className="w-[100%] rounded-sm outline-none bg-purple-50 "/>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customizelinks;
