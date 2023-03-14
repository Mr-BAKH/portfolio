import './style.css'
import {token} from '../../them'
import React,{useRef , useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                        color: color.gray[200],
                    }}
                >
                    <h2>{props.title}</h2>
                    <h5>{props.date}</h5>
                    <StarCreator/>
                </div>
                <div className="detailright">
                    <ExpandMoreIcon/>
                    <ChatIcon/>
                    <FavoriteIcon/>
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
                <Proj title='AdminDashboard' date='4 March 2022' url='https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
                <Proj title='Design a website' date='10 June 2022' url='https://images.pexels.com/photos/3805759/pexels-photo-3805759.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/13804931/pexels-photo-13804931.jpeg?auto=compress&cs=tinysrgb&w=600' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1600' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/14544309/pexels-photo-14544309.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/11065012/pexels-photo-11065012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
                <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/6929306/pexels-photo-6929306.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
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


