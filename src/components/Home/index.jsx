// import React from 'react';
import {token} from '../../them'

import localimage from '../../assets/photo/img.png'

import Brightness4Icon from '@mui/icons-material/Brightness4';

import './style.css'

const App= ()=>{

const color =  token;

    return(
        <div className="mainhomePage" id="home"
            style={{
                background:`linear-gradient(0deg, ${color.gray[900]}, ${color.gray[100]})`
            }}
        >
           <div className="header"
            style={{
                background: color.blue[600],
                color: color.gray[100],
            }}   
        >
            <span style={{fontSize:"22px",color:color.blue[200],textAlign:"center",fontFamily: `Titan One', cursive`,fontWeight:'bolder'}}>WEB & LOGO<span style={{fontSize:"14px"}}>_ Designig Group</span></span>
            <div className='rightHeader'>
                <Brightness4Icon className='icon'/>
            </div>
           </div>
           
            {/* my profile and desctiption of me */}
            <div className='mainPortfolio'
                style={{
                    background: color.blue[200],
                    borderBottom: `15px solid ${color.gray[800]}`,
                    boxShadow:` 0 10px 0px ${color.blue[200]}`,
                }}
            >
                <div className='description'>
                    <h1 style={{color: color.blue[800]}}>Hi,there</h1>
                    <h3 style={{color: color.blue[700]}}>wellcome to my portfolio.</h3>
                    <p style={{margin:'20px 0px',color: color.gray[900],fontSize: '18px'}}>
                    Our team can provide you with various services in the field of Web & Logo designingn. You can visit our team and the work we have done so far.
                    </p>
                </div>
                <img className='imgHellow' src={localimage} alt="amirIage"/>
            </div>
                
        </div>
    )
}

export default App;