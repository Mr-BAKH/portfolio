import {token} from '../../them'
import './style.css'
import localimage from '../../assets/photo/bakh copy.png'
import Bakhoda from '../../assets/photo/1.png'
import Hayyati from '../../assets/photo/amirPhoto.jpg'
import Ryhanny from '../../assets/photo/2.jpg'
import Mddost from '../../assets/photo/4.jpg'
import Javad from '../../assets/photo/3.jpg'

import Circle from '../global/canvas'
import React,{useRef , useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const TeamMemmber =(props)=>{

    const color = token;

    return(
        <div className="container"
            style={{
                color: color.gray[900]
            }}
        >
            <img src={props.image} style={{width:'100px',height:'100px',borderRadius:"50%",boxShadow:`0 0 5px ${color.gray[500]} `}}/>
            <span style={{marginTop:'5px',fontSize:'18px',textShadow:`0 0 10px ${color.gray[500]}`}}>{props.name}</span>
            <span style={{fontSize:'14px',textShadow:`0 0 10px ${color.gray[500]}`}}>{props.position}</span>
        </div> 
    )
}

const ProgCircle = (props)=>{

    const color = token;
    
    return(
        <div className="circle1">
            <span style={{gap:'1px',display:'flex',flexDirection:'column',width:'80%',flexWrap:'wrap',alignItems:'center', justifyContent:"center",position:'absolute',rotate:'90deg',color:color.blue[700],fontSize:'20px'}}>
                <span style={{display:'block'}}>{props.prog}%</span>
                <span style={{textAlign:'center', display:'block',color:color.orange[600],fontSize:'16px'}}>{props.title}</span>
            </span>
            <span style={{display:'block'}}><Circle wid={100} color={color.gray[400]} d={360} widline={5}/></span>
            <span style={{display:'block', position:'absolute'}}><Circle wid={100} color={color.blue[700]} d={props.prog*360/100} widline={5}/></span>
        </div>
    )
}

const DetailMemmber =()=>{
    const color = token;
    
    return(
        <div className="centerWrapper">
        <img
            style={{
                background: `linear-gradient(0deg,${color.gray[100]} 20%, ${color.blue[200]})`,
                borderBottom: `10px solid ${color.gray[200]}`,
            }}
            className='ImageMemmber'src={localimage} alt="profile" />
        <div className="detail">
            <div className='textDetail'>
                <span style={{margin:'auto',fontSize:"180%",display:'flex',flexWrap:'wrap'}}>AmirHosseinBakhoda</span>
                <span style={{margin:'auto',fontSize:"110%",fontweight:"300"}}>FullStack</span>
                <p className='detailOfMemmber' style={{marginTop:'20px',textAlign:'justify'}}>Hello, I have started my activity in the field of website design three years ago and completed a number of projects in this field, and some time ago I created a group with my friends that provides complete services from design to the final implementation of web projects. We present. In this field, we are learning and doing the project so that we can create a good result for you with the help of my friends.</p>
            </div>
            <div className="canvasCircle">
                <ProgCircle title="Css" prog={94}/>
                <ProgCircle title="NodeJs" prog={84}/>
                <ProgCircle title="ReactJs" prog={81}/>
                <ProgCircle title="UI/UX" prog={85}/>
            </div>
        </div>
    </div>
    )
}

const App = ()=>{

    const color = token;

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
    if (ref.current) {
        gsap.from(ref.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ref.current,
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: true,
        },
        });
    }
    }, []);
    
    return(
        // ref={ref} 
        <div className="mainContainer" id='teamMemmber'>
            <span style={{textAlign:'center',margin:'10px', fontSize:'30px', fontFamily:`'Fredoka One', cursive`}}>MeetTeam</span>
                   <DetailMemmber/>
                <div className="partTeam" 
                    style={{
                        background: color.gray[300]
                    }}
                >
                    <TeamMemmber name='Mr.Bakhoda' image={Bakhoda} position='FrontEnd'/>
                    <TeamMemmber name='Mr.Shekariyan' image={Javad} position='BackEnd'/>
                    <TeamMemmber name='Mr.Hayyati' image={Hayyati} position='FrontEnd'/>
                    <TeamMemmber name='Miss.Ryhanny' image={Ryhanny} position='UI/UX'/>
                    <TeamMemmber name='Mr.MdDost' image={Mddost} position='WorldPress'/>
                </div> 
        </div>
    )
}

export default App;