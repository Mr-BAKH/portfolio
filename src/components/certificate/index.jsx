import './style.css'
import data from '../../data/index'
import React,{useRef , useEffect } from "react"

import {token} from '../../them'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Certificate =(props)=>{
    const color =  token;
    return(
        <div className='certificate'
            style={{
                background: color.blue[300],
            }}
        >
           <a style={{ color: color.gray[900]}} className='showmore' href={props.url}>More<ExpandMoreIcon style={{fontSize:'25px'}}/></a>
           <img src={props.img} className='imageCertificate'/>
        </div>
    )
}


const App =()=>{

 const color = token;
 console.log(data)

 gsap.registerPlugin(ScrollTrigger);
 const ref = useRef(null);

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
        <div className='certificateContainer' id="certificate">
                <h1 style={{textAlign:'center', color: color.blue[600],fontFamily:`'Fredoka One', cursive`}}>Certificates</h1>
                    <div  ref={ref} className='certificateWrapper'>
                        {data[0].certificates.map((item)=>{
                            console.log(item)
                            return(<Certificate url={item.url} img={item.img}/>)
                        })} 
                    </div>
        </div>
    )
}

export default App;