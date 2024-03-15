import React, { useState } from 'react';

const Testing = () => {
  const [links, setLinks] = useState([]);

  const handleAddBetDiv = () => {
    setLinks([...links, { linkLogo: '', linkText: '', payout: 0 }]);
  };

  function getInputs() {
    links.map(val => {
      console.log(val);
    });
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

  return (
    <div>
      {links.map((odd, index) => (
        <div key={index}>
          <div className="flex justify-between text-[10px] py-[5px] text-gray-700 font-bold">
            <button className="text-gray-400">Remove</button>
          </div>

          <div>
            <p className="text-[10px] py-[3px] font-semibold text-gray-700">Perform</p>
            <div className="relative flex items-center justify-between px-3 py-2 w-[100%] border rounded-[7px]">
              <div className="flex items-center gap-1">
                <img src='' className="h-[20px] w-[20px]" alt="" />
                <button className="text-[12px] py-[2px] rounded-sm">Facebook</button>
              </div>

              <div>
                <i className="text-black cursor-pointer ri-arrow-down-s-line text-2xl"></i>
                {/* <p className='cursor-pointer'>V</p> */}
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
                        className="w-[100%] rounded-sm outline-none"/>
                </div>
            </div>
        </div>
      ))}

      <button className='block' onClick={handleAddBetDiv}><i className="fa-solid fa-circle-plus"></i>MORE BETS</button>
      <button onClick={getInputs}>click</button>
    </div>
  );
};

export default Testing;
