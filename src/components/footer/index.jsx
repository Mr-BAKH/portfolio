import React from 'react';
import './style.css'
import {token} from '../../them'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';


const App = ()=>{

    const color = token;

    return(
        
        <div className="footerContainer"
            style={{
                backgroundColor: color.blue[600]
            }}
        >
           
            <div className="footertop">
                <p
                    style={{
                        width:'70vw',    
                        minWidth: '300px',
                        textAlign:'inherit',
                        height: 'fit-content',
                        fontSize:'20px',
                        padding: '10px',
                        // fontFamily:`'Caveat', cursive`,
                        color: color.blue[800]
                    }}
                >Our team works tirelessly to provide quality services and the best solutions for your problems, considering customer satisfaction. You can fully trust the expertise and integrity of our team.</p>
                <div className='lindLists'>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><a style={{color: color.gray[900],textDecoration: 'none', fontSize:"16px",fontFamily:`'Titan One', cursive`}} href="#certificate">Certificate</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><a style={{color: color.gray[900],textDecoration: 'none', fontSize:"16px",fontFamily:`'Titan One', cursive`}} href="#Comment">Comment</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><a style={{color: color.gray[900],textDecoration: 'none', fontSize:"16px",fontFamily:`'Titan One', cursive`}} href="#Projects">Project</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><a style={{color: color.gray[900],textDecoration: 'none', fontSize:"16px",fontFamily:`'Titan One', cursive`}} href="#teamMemmber">Team</a></li>
                </div>
            </div>
            <div className="footerbottom"
                style={{
                    borderTop: `2px solid ${color.gray[900]}`,
                    color: color.gray[900],
                    fontSize:"10px",
                }}
            >
                <span>Created by mr.bakh</span>
            </div>
            <div className="fixicons">
                <a href="#home" style={{color: color.gray[400]}}><HomeIcon className='icon'/></a>
                <a href="mailto:mr.bakh.usb@gmail.com" style={{color: color.gray[400]}}><EmailIcon className='icon'/></a>
                <a href="https://telegram.dog/Mr_BAKH1" style={{color: color.gray[400]}}><TelegramIcon className='icon'/></a>
                <a href="https://github.com/Mr-BAKH" style={{color: color.gray[400]}}><GitHubIcon className='icon'/></a>
                <a href="https://www.linkedin.com/in/amirhosseinbakhoda" style={{color: color.gray[400]}}><LinkedInIcon className='icon'/></a>
            </div>
        </div>
    )
}

export default App;