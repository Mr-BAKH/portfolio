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
import { padding, textAlign } from '@mui/system';


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
                    className='text-foote-top'
                    style={{
                        color: color.blue[800],
                        textAlign:'initial',
                    }}
                >Our team works tirelessly to provide quality services and the best solutions for your problems, considering customer satisfaction. You can fully trust the expertise and integrity of our team.</p>
                <ul className='lindLists'>
                    <li><a style={{color: color.gray[900]}} href="#certificate">Certificate</a></li>
                    <li><a style={{color: color.gray[900]}} href="#Comment">Comment</a></li>
                    <li><a style={{color: color.gray[900]}} href="#Projects">Project</a></li>
                    <li><a style={{color: color.gray[900]}} href="#teamMemmber">Team</a></li>
                </ul>
            </div>
            <div className="footerbottom"
                style={{
                    marginTop:"50px",
                    borderTop: `2px solid ${color.blue[700]}`,
                    color: color.blue[800],
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