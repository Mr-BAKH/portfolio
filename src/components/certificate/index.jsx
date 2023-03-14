import './style.css'
import {token} from '../../them'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React,{useRef , useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



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
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DGZC5R89KH98/CERTIFICATE_LANDING_PAGE~DGZC5R89KH98.jpeg'}
                            title="React Basic"/>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB.jpeg'}
                            title="React Advance"/>
                    </div>
        </div>
    )
}

export default App;