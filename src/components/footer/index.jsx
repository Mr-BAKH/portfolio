import React from 'react';
import './style.css'
import {token} from '../../them'
import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';


const App = ()=>{

    const color =  token;

    const [inp, setInp] = React.useState({
      name:'',
      email:'',
      phone:'',
      description:''
    })
    
    const onchangeHandler =(e)=>{
        setInp({...inp, [e.target.name]: e.target.value})
    }

    const submithandler = (e)=>{
        e.preventDefault();
        setInp({
            name:'',
            phone:'',
            email:'',
            description:'',
        })
    }
    
    return(
        <div className="footer"
            style={{
                background: color.blue[900],
                color: color.blue[900],
                borderTop: `10px solid ${color.blue[700]}`
            }}
        >
            <div className="footerConainer">

                <Box className='left'
                    sx={{
                        color: color.gray[900],
                        background: color.blue[800]
                    }}>
                        <Box 
                        sx={{
                            fontSize: '25px', fontWeight:'bolder', color: color.gray[400],
                            display: 'flex', alignItems: 'center',gap: '5px'
                            }}>
                            <span>My team</span>
                            <GroupsIcon className='grouIcon'/>
                        </Box>
                        <p>are ready to work with you to design any website model you want in the shortest possible time. Contact us if needed.</p>
                </Box>
                    
                <div className="center"
                    style={{
                        color: color.blue[800]
                    }}>
                        <form className='formInputs' onSubmit={submithandler}>
                            <div className='customer'>
                                <span className='submitText' style={{color: color.orange[600]}}>Submit your Projectto us now!</span>
                                <input onChange={onchangeHandler} value={inp.name} name={"name"} style={{boxShadow:` 0 0 5px ${color.gray[800]}`,background: color.gray[900]}} className='inputs' type='text' placeholder='Enter your name'/>
                                <input onChange={onchangeHandler} value={inp.phone} name={"phone"} style={{boxShadow:` 0 0 5px ${color.gray[800]}`,background: color.gray[900]}} className='inputs'type='tel' placeholder='Enter your phone'/>
                                <input onChange={onchangeHandler} value={inp.email} name={"email"} style={{boxShadow:` 0 0 5px ${color.gray[800]}`,background: color.gray[900]}} className='inputs'type='email' placeholder='Enter your email'/>
                                <button 
                                    type='submit'
                                    className='buttonStyle'
                                    style={{
                                        color: color.gray[100],
                                        background: color.blue[700],    
                                    }}
                                >send</button>
                            </div>
                            <div className='discription'>
                                <textarea onChange={onchangeHandler} value={inp.description} name={"description"}  className='inputs' name='description' placeholder='Description...'
                                style={{boxShadow:` 0 0 5px ${color.gray[800]}`,textAlign: 'start', width: "100%", height:'100%', background: color.gray[900], fontSize: '30px'}}/>
                            </div>
                        </form>
                    </div> 
            </div>
        </div>
    )
}

export default App;