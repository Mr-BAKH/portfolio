import React from 'react';
import './style.css'
import {token} from '../../them'
import Circle from '../global/canvas';
import WritingImg from '../../assets/photo/Writing.jpg'


const ProgCircle =(props)=>{

    const color =  token;

    return(
        <div className="circle1">
        <span style={{gap:'1px',display:'flex',flexDirection:'column',width:'80%',flexWrap:'wrap',alignItems:'center', justifyContent:"center",position:'absolute',rotate:'90deg',color:color.blue[700],fontSize:'20px'}}>
            <span style={{display:'block'}}>{props.number}+</span>
            <span style={{textAlign:'center', display:'block',color:color.orange[600],fontSize:'16px'}}>{props.title}</span>
        </span>
        <span style={{display:'block'}}><Circle wid={100} color={color.blue[400]} d={360} widline={6}/></span>
    </div>
    )
}


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
       <div className="contactUsContainer">
            <img className="leftContainer"
                style={{
                    boxShadow:`-10px 5px 10px ${color.blue[500]}`
                }}
            src={WritingImg} alt='image'/>
            <form className="writeContainer"onSubmit={submithandler}>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.name} name={"name"} type='text' placeholder='Enter your name'/>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.phone} name={"phone"} type='tel' placeholder='Enter your phone'/>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.email} name={"email"} type='email' placeholder='Enter your email'/>
                    <textarea className='inputSt'style={{height:'200px'}} onChange={onchangeHandler} value={inp.description} name={"description"} placeholder='Description...'/>
                    <button className="buttomform" style={{ padding:'10px 20px', border:'none',background:color.blue[500]}} type='submit'>Send</button>
                <div className='abluteUs'>
                   <ProgCircle title="Projects" number={70}/>
                   <ProgCircle title="Houres" number={"50K"}/>
                   <ProgCircle title="Client" number={90}/>
                   <ProgCircle title="Years" number={3}/>
                </div>
            </form> 
       </div>
                    
    )
}

export default App;

