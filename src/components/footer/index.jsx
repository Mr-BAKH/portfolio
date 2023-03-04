import './style.css'
import {token} from '../../them'
import GroupsIcon from '@mui/icons-material/Groups';
import Box from '@mui/material/Box';


const App = ()=>{

    const color =  token;
    
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
                        <form className='formInputs'>
                            <div className='customer'>
                                <span className='submitText' style={{color: color.orange[600]}}>Submit your Projectto us now!</span>
                                <input style={{boxShadow:` 0 0 5px ${color.orange[700]}`,background: color.gray[900]}} className='inputs' type='text' placeholder='Enter your name'/>
                                <input style={{boxShadow:` 0 0 5px ${color.orange[700]}`,background: color.gray[900]}} className='inputs'type='tel' placeholder='Enter your phone'/>
                                <input style={{boxShadow:` 0 0 5px ${color.orange[700]}`,background: color.gray[900]}} className='inputs'type='email' placeholder='Enter your email'/>
                                <button 
                                    className='buttonStyle'
                                    style={{
                                        color: color.gray[100],
                                        background: color.blue[700],    
                                    }}
                                >send</button>
                            </div>
                            <div className='discription'>
                                <textarea  className='inputs' name='description' placeholder='description...'
                                style={{boxShadow:` 0 0 5px ${color.orange[700]}`,textAlign: 'start', width: "100%", height:'100%', background: color.gray[900], fontSize: '30px'}}/>
                            </div>
                        </form>
                    </div> 
            </div>
        </div>
    )
}

export default App;