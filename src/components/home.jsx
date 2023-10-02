import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import Cv from '../assets/pdf/CV_latest.pdf'
import DownloadIcon from '@mui/icons-material/Download';

import React from 'react';
import localimage from '../assets/photo/img.png'

const App= ()=>{
    return(
    <div 
      className="w-full h-screen pb-[20px] overflow-hidden" 
      id="home"
    >
      <div
        style={{gap:10}}
        className="bg-sky-900 text-gray-100 py-[15px] px-[20px] flex items-center flex-row justify-between w-full text-[22px] font-bold overflow-hidden"  
      >
        <span 
          className='text-md text-slate-300 text-center font-bolder'
          style={{fontFamily: `Titan One', cursive`}}>Web | Mobile | Logo
        </span>
        <div className='flex items-center justify-center'>
        
          <a 
            href={Cv}
            target='_blank'
            download={Cv}
            className='px-[30px] bg-black/10 py-[10px] font-semibold hover:bg-sky-700 cursor-pointer text-md rounded-3xl'
          >CV<DownloadIcon/>
          </a>
        </div>
      </div>
        
        {/* my profile and desctiption of me */}
        <div 
          className='w-full bg-sky-100 drop-shadow-lg relative min-h-screen h-fit flex items-start sm:items-center justify-center overflow-hidden '
        >
          <div 
            className='flex flex-col w-5/6 sm:w-[40vw] text-xl  py-[7vw]'
          >
            <h1 className='text-sky-900 font-bold'>Hi,there</h1>
            <h3 className='text-sky-950'>wellcome to my portfolio.</h3>
            <p className='text-gray-900 my-[20px]'>
              Our team can provide you with various services in the field of WebSite, web application, Mobile Application, and Logo design. You can visit our team and the work we have done so far.
            </p>
          </div>
          <img 
            className='mr-[10px] h-[90vh] object-contain absolute bottom-0 sm:right-0' 
            src={localimage} alt="amirIage"
          />
        </div>
        <div 
          style={{gap:5}}
          className="flex w-fit flex-col rounded-[10px] items-center justify-center p-[5px] py-[10px] fixed z-20 top-[50vh] left-[2vw] backdrop-blur-sm bg-black/50 shadow-xl shadow- shadow-black/10"
        >
          <a href="#home" className='cursor-pointer text-slate-300 hover:text-slate-50'><HomeIcon sx={{fontSize:35}}/></a>
          <a href="mailto:mr.bakh.usb@gmail.com" className='cursor-pointer text-slate-300 hover:text-slate-50'><EmailIcon sx={{fontSize:35}}/></a>
          <a href="https://telegram.dog/Mrbakh2" className='cursor-pointer text-slate-300 hover:text-slate-50'><TelegramIcon sx={{fontSize:35}}/></a>
          <a href="https://github.com/Mr-BAKH" className='cursor-pointer text-slate-300 hover:text-slate-50'><GitHubIcon sx={{fontSize:35}}/></a>
          <a href="https://www.linkedin.com/in/amirhosseinbakhoda" className='cursor-pointer text-slate-300 hover:text-slate-50'><LinkedInIcon sx={{fontSize:35}}/></a>
        </div>
    </div>
    )
}

export default App;