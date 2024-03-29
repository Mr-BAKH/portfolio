import './style.css'
import {token} from '../../them'
import React,{useRef , useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import carRent1 from '../../assets/photo/projects/canrRent.jpg'
import carRent2 from '../../assets/photo/projects/car-rental_car1.jpg'
import chatApp from '../../assets/photo/projects/chatApplication.jpg'
import HealthApp from '../../assets/photo/projects/Health&Beauty.jpg'
import HomeDecoraitonApp from '../../assets/photo/projects/homeDecoration.jpg'
import HomeRentApp from '../../assets/photo/projects/homeRental.jpg'
import JymApp from '../../assets/photo/projects/jymProject.jpg'
import MusicApp from '../../assets/photo/projects/musicPlayer.jpg'
import PersonalApp from '../../assets/photo/projects/personalWebsite.jpg'
import VideoApp from '../../assets/photo/projects/videoPlayer.jpg'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradeIcon from '@mui/icons-material/Grade';

const Proj = (props)=>{
   
    const color =  token;

    return(

        <div className='proj'>
            <div className="imageBox"
                style={{backgroundImage:`url(${props.url})`}}
            ></div>
            <div className="detailBox">
                <div className="detailleft"
                    style={{
                        color: color.gray[100],
                    }}
                >
                    <span style={{ width: '100%'}} ><StarCreator/></span>
                    <span style={{ width: '100%'}} >{props.title}</span>
                    <span style={{ width: '100%'}} >{props.date}</span>
                </div>
                <div className="detailright">
                    <ChatIcon/>
                    <FavoriteIcon/>
                    <ExpandMoreIcon/>
                </div>

            </div>
        </div>
    );
};

const StarCreator = (props) => {
    return(
        <span><GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/></span>
    )
}



const App =()=>{
    
    const color =  token;
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
    if (ref.current) {
        gsap.from(ref.current, {
        opacity: 0,
        y: 200,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 100%',
            scrub: true,
        },
        });
    }
    }, []);
    
    return(
        <div ref={ref} className='projectContainer' id='Projects'
            style={{
                background: color.blue[800],
                color: color.blue[100]
            }}
        >
            <span style={{top:'10px',position:'absolute',width:"100%",textAlign:'center'}}>
                <span style={{fontSize:'30px',color:color.gray[200],fontFamily:`'Fredoka One', cursive`}}>Latest projects</span>
                </span>
            <div className='boxWrapper'>
                <div className="projectsWrapper">
                <Proj title='Rental Car' date='4 March 2022' url={carRent1}/>
                <Proj title='ChatApplication' date='10 Jun 2022' url={chatApp}/>
                <Proj title='Cosmetics' date='2 January 2023' url={HealthApp}/>
                <Proj title='Interior decoration' date='27 May 2022' url={HomeDecoraitonApp}/>
                <Proj title='Real estate consultant' date='22 March 2021' url={HomeRentApp}/>
                <Proj title='Sport Club' date='1 April 2021' url={JymApp}/>
                <Proj title='Music Player' date='13 December 2021' url={MusicApp}/>
                <Proj title='Personal Website' date='4 March 2021' url={PersonalApp}/>
                <Proj title='Car gallery' date='18 August 2021' url={carRent2}/>
                <Proj title='Video player' date='5 July 2021' url={VideoApp}/>
               </div>
            </div>
                <ExpandMoreIcon className='nextIcon'
                    style={{
                        color: color.gray[300]
                    }}
                />
        </div>
    )
}

export default App;


