// import React from 'react';
import {token} from '../../them'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './style.css'

const App= ()=>{

const color =  token;

    return(
        <div className="mainhomePage">
           <div className="header"
            style={{
                background: color.blue[600],
                color: color.gray[100]
            }}   
        >
                <p>Mr.BAKH<span style={{fontweigth:"400", fontSize:'12px'}}>_Portfolio</span></p>
                <div className='rightHeader'
                >
                    <div className='textBox'
                        style={{
                            color: color.gray[900]
                        }}
                    >
                        <span className='textHeader'>Certificates</span>
                        <span className='textHeader'>Projects</span>
                    </div>
                    <Brightness4Icon className='icon'/>
                </div>
           </div>
            <div className="fixicons"
                style={{
                    background: color.blue[700],
                    color: color.gray[900]
                }}
            >
                <TelegramIcon className='icon'/>
                <EmailIcon className='icon'/>
                <GitHubIcon className='icon'/>
                <LinkedInIcon className='icon'/>
            </div>
            {/* my profile and desctiption of me */}
            <div className='mainPortfolio'>
                <div className='imgbox'></div>
                <div className='description'>
                    <h1 style={{color: color.blue[800]}}>Hi,there</h1>
                    <h3 style={{color: color.blue[700]}}>wellcome to my portfolio.</h3>
                    <p style={{margin:'20px 0px',color: color.gray[900],fontSize: '20px'}}>
                        I have started programming with html, css, javascript languages ​​for two years and I have done several projects in this field. Finally, I started my activity in the field of React and I intend to work in this field...
                    </p>
                    <ul>
                        <li>Phone: +98 9154968488</li>
                        <li>Gmail: mr.bakh.usb@gmail.com</li>
                    </ul>
                </div>
            </div>
                <span className='expandMore'><ExpandMoreIcon/></span>
                
        </div>
    )
}

export default App;