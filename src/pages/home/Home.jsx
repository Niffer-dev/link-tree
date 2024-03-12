import React, { useState } from 'react'
import NewDiv from '../../components/newdiv/Newdiv';

const Home = () => {
    const [number, setNumber] = useState(0);
    const [addLink, setAddLink] = useState(0);

    const [templateDivs, setTemplateDivs] = useState([]);

    const handleCreateTemplateDiv = () => {
        setTemplateDivs(prevTemplateDivs => [...prevTemplateDivs, 
        <div key={templateDivs.length} className='bg-white py-[1rem] px-[1rem] rounded-md shadow-gray-500 mb-[20px]'>
            <div>
                <div className='flex justify-between text-[10px] py-[5px] text-gray-700 font-bold'>
                    <h2>= Link 1</h2>
                    <button onClick={removeParent} className='p-[7px] bg-red-300 rounded-[10px]'>Remove</button>
                </div>

                <div>
                    <p className='text-[10px] py-[3px] font-semibold text-gray-700'>Perform</p>
                    <button className='text-[12px] w-[100%] py-[2px] rounded-sm shadow-slate-300 shadow-sm'>Github</button>
                </div>

                <div>
                    <p className=' pt-[12px] pb-[5px] text-[10px] font-semibold text-gray-700'>Link</p>
                    <input type="text" className='w-[100%] rounded-sm shadow-slate-300 shadow-sm'/>
                </div>
            </div>    
        </div> 
        ]);
    };

    const removeParent = (event) => {
        const parentElement = event.target.parentElement.parentElement.parentElement;
        
        parentElement.remove();
      };




  return (
    <div className='flex justify-center'>
        <div className="w-[270px] mt-[15px] rounded-[50px] border-2 h-[80vh] flex items-center justify-center relative">
            <div className="w-[250px] rounded-[50px] border-2 h-[75vh] flex justify-center bg-purple-50 flex-col">
                <div className='bg-white rounded-[6px] h-[25px] w-[115px] absolute top-[16px] left-[80px] border-x-2 border-b-2'>
                </div>

                <div className='flex items-center justify-center  w-full'>
                    <div className=' rounded-full bg-[#ccc] mt-[4px] mx-auto h-[100px] w-[100px]'></div>
                </div>

                <div className='mt-[2rem] flex flex-col justify-center items-center text-white'>
                    <div className='flex-col item-center text-center justify-between w-[100%]'>
                        <div className='flex justify-between p-[10px] bg-[#000] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button className='text-white'><i class="ri-github-fill text-white"></i>Github</button>
                            <i class="ri-arrow-right-line text-white"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-[red] w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button><i class="ri-youtube-line"></i>Youtube</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-green-500 w-[80%] mx-[25px] rounded-md mb-[20px]'>
                            <button><i class="ri-whatsapp-line"></i>WhatsApp</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>

                        <div className='flex justify-between p-[10px] bg-blue-700 w-[80%] mx-[25px] rounded-md'>
                            <button><i class="ri-linkedin-box-line"></i>LinkedIn</button>
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-[2rem] py-[2rem] w-[45%] m-5 bg-purple-50'>
            <div className='py-[1rem] rounded-md shadow-gray-500'>
                <h2 className='font-bold text-[25px] text-gray-700'>Customize your links</h2>
                <p className='text-[12px] pb-[15px] pt-[5px] text-gray-700'>Add/edit/remove links below and then share all your profit with the whole!</p>
                <button onClick={handleCreateTemplateDiv} className='text-[11px] font-bold text-purple-700 w-[100%] py-[5px] px-[20px] rounded-sm' style={{border: '1px solid purple'}}> + Add new link</button>
            </div>

            
            <div className='bg-white py-[1rem] px-[1rem] rounded-md shadow-gray-500 mb-[20px]'>
                <div>
                    <div className='flex justify-between text-[10px] py-[5px] text-gray-700 font-bold'>
                        <h2>= Link 1</h2>
                        <button onClick={removeParent} className='p-[7px] bg-red-300 rounded-[10px]'>Remove</button>
                    </div>

                    <div>
                        <p className='text-[10px] py-[3px] font-semibold text-gray-700'>Perform</p>
                        <button className='text-[12px] w-[100%] py-[2px] rounded-sm shadow-slate-300 shadow-sm'>Github</button>
                    </div>

                    <div>
                        <p className=' pt-[12px] pb-[5px] text-[10px] font-semibold text-gray-700'>Link</p>
                        <input type="text" className='w-[100%] rounded-sm shadow-slate-300 shadow-sm'/>
                    </div>
                </div>    
            </div>  

            {templateDivs.map((templateDiv, index) => (
                <div key={index}>{templateDiv}</div>
            ))}
        </div>        
    </div>
  )
}

export default Home