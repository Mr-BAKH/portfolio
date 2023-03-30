import './style.css'
import {token} from '../../them'
import Circle from '../global/canvas';
import WritingImg from '../../assets/photo/Writing.jpg'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React,{useRef , useEffect } from "react"


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

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

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

 useEffect(() => {
 if (ref.current) {
     gsap.from(ref.current, {
     opacity: 0,
     y: 100,
     duration: 2,
     ease: 'power2.out',
     scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 90%',
        scrub: true,
     },
     });
 }
 }, []);
    
    return(
       <div ref={ref} className="contactUsContainer">
            <img className="leftContainer" src={WritingImg} alt='image'/>
            <form className="writeContainer"onSubmit={submithandler}>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.name} name={"name"} type='text' placeholder='Enter your name'/>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.phone} name={"phone"} type='tel' placeholder='Enter your phone'/>
                    <input className='inputSt' onChange={onchangeHandler} value={inp.email} name={"email"} type='email' placeholder='Enter your email'/>
                    <textarea className='inputSt'style={{height:'200px'}} onChange={onchangeHandler} value={inp.description} name={"description"} placeholder='Description...'/>
                    <button className="buttomform" style={{ background:color.blue[500]}} type='submit'>Send</button>
            </form> 
            <div className='abluteUs'>
                <ProgCircle title="Projects" number={30}/>
                <ProgCircle title="Houres" number={"50K"}/>
                <ProgCircle title="Client" number={20}/>
                <ProgCircle title="Years" number={4}/>
            </div>
       </div>
                    
    )
}

export default App;

