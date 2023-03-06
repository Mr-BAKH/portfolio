// import React from 'react';
import {token} from '../../them'

import ProfileImage from '../image/index'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

import './style.css'

const App= ()=>{

const color =  token;

    return(
        <div className="mainhomePage" id="home">
           <div className="header"
            style={{
                background: color.blue[600],
                color: color.gray[100]
            }}   
        >
                <p>Mr.BAKH<span style={{fontweigth:"400", fontSize:'12px'}}>_Portfolio</span></p>
                <div className='rightHeader'
                >
                    <div className='textBox'>
                        <a href='#certificate'style={{color: color.gray[900], textDecoration:'none'}}><span className='textHeader'>Certificates</span></a>
                        <a href='#Projects' style={{color: color.gray[900], textDecoration:'none'}}><span className='textHeader'>Projects</span></a>
                        <a href='#Comment' style={{color: color.gray[900], textDecoration:'none'}}><span className='textHeader'>Comment</span></a>
                    </div>
                    <Brightness4Icon className='icon'/>
                </div>
           </div>
            <div className="fixicons"
                style={{
                    // background: color.blue[700],
                }}
            >
                <a href="#home" style={{color: color.gray[400]}}><HomeIcon className='icon'/></a>
                <a href="mailto:mr.bakh.usb@gmail.com" style={{color: color.gray[400]}}><EmailIcon className='icon'/></a>
                <a href="https://telegram.dog/Mr_BAKH1" style={{color: color.gray[400]}}><TelegramIcon className='icon'/></a>
                <a href="https://github.com/Mr-BAKH" style={{color: color.gray[400]}}><GitHubIcon className='icon'/></a>
                <a href="https://www.linkedin.com/in/amirhosseinbakhoda" style={{color: color.gray[400]}}><LinkedInIcon className='icon'/></a>
            </div>
            {/* my profile and desctiption of me */}
            <div className='mainPortfolio'>
                <div style={{postion:'absolute'}}>
                    <ProfileImage heigth={500} style={{
                        position:'absolute',
                         zIndex:'2',
                         }}/>
                    <span
                        style={{
                            opacity: '0',
                            color:color.blue[900],
                            fontSize:'50px',
                            fontFamily: `'Titan One', cursive`,
                            position:'absolute',
                            bottom:'20vh',
                            right:'2%',
                            zIndex:'3',
                            display:'block',
                            padding: '2px 5px',
                            background: color.orange[600],
                            animation: 'toleft 2s 10s 1 forwards ease',
                        }}
                        >FullStack</span>
                    <span
                        style={{
                            // opacity: '0',
                            color:color.blue[700],
                            fontSize:'150px',
                            fontFamily: `'Titan One', cursive`,
                            position:'absolute',
                            right:'100vw',
                            bottom:'32vh',
                            zIndex:'1',
                            animation: 'toright 2s 9s 1 forwards ease',
                        }}
                    >Web</span>
                    <span
                        style={{
                            opacity: '0',
                            color:color.blue[600],
                            fontSize:'140px',
                            fontFamily: `'Titan One', cursive`,
                            position:'absolute',
                            right:'100vw',
                            bottom:'5vh',
                            zIndex:'3',
                            animation: 'toleft 2s 10s 1 forwards ease',
                        }}
                    >Designer</span>
                    <span
                        style={{
                            opacity: '0',
                            color:color.gray[400],
                            fontSize:'150px',
                            fontFamily: `'Titan One', cursive`,
                            position:'absolute',
                            left:'-100%',
                            top:'15vh',
                            zIndex:'1',
                            animation: 'mrBakh 2s 1s 1 forwards ease'
                        }}
                    >Mr.Bakh</span>
                </div>
                <div className='description'>
                    <h1 style={{color: color.blue[800]}}>Hi,there</h1>
                    <h3 style={{color: color.blue[700]}}>wellcome to my portfolio.</h3>
                    <p style={{margin:'20px 0px',color: color.gray[900],fontSize: '20px'}}>
                        I have started programming with html, css, javascript languages ​​for two years and I have done several projects in this field. Finally, I started my activity in the field of React and I intend to work in this field...
                    </p>
                </div>
            </div>
                
        </div>
    )
}

export default App;