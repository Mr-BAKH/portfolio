import React from 'react';
import './style.css'
import {token} from '../../them'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                        // background: 'red',
                        textAlign:'center',
                        height: 'fit-content',
                        fontSize:'40px',
                        padding: '5px',
                        fontFamily:`'Caveat', cursive`,
                        color: color.blue[800]
                    }}
                >Our team works tirelessly to provide quality services and the best solutions for your problems, considering customer satisfaction. You can fully trust the expertise and integrity of our team.</p>
                <div className='lindLists'>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><ExpandMoreIcon style={{rotate:'-180deg',color: color.orange[200],fontSize:'20px'}}/><a style={{color: color.blue[800],textDecoration: 'none', fontSize:"20px",fontFamily:`'Titan One', cursive`}} href="#certificate">Certificate</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><ExpandMoreIcon style={{rotate:'-180deg',color: color.orange[200],fontSize:'20px'}}/><a style={{color: color.blue[800],textDecoration: 'none', fontSize:"20px",fontFamily:`'Titan One', cursive`}} href="#Comment">Comment</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><ExpandMoreIcon style={{rotate:'-180deg',color: color.orange[200],fontSize:'20px'}}/><a style={{color: color.blue[800],textDecoration: 'none', fontSize:"20px",fontFamily:`'Titan One', cursive`}} href="#Projects">Project</a></li>
                        <li style={{marginTop:'5px',display:'flex',alignItems:'center'}}><ExpandMoreIcon style={{rotate:'-180deg',color: color.orange[200],fontSize:'20px'}}/><a style={{color: color.blue[800],textDecoration: 'none', fontSize:"20px",fontFamily:`'Titan One', cursive`}} href="#teamMemmber">Team</a></li>
                </div>
            </div>
            <div className="footerbottom"
                style={{
                    borderTop: `2px solid ${color.blue[800]}`
                }}
            >
                <div style={{borderRight:`2px solid ${color.blue[800]}`,paddingRight:'10px'}}>Mr.bakh</div>
                <div>reated by mr.bakh</div>
            </div>
        </div>
    )
}

export default App;