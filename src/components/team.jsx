import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ourteam } from '../data'
import React,{useRef , useEffect, useState,  } from "react"


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }}


const App = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const [team, setTeam] = useState(ourteam.member)
    const [memmber, setMemmber] = useState(ourteam.member[0])

   
    useEffect(() => {
      const isMobile = getWindowDimensions().width < 530 ? 1:0;
    if (ref.current) {
        gsap.from(ref.current, {
        opacity: isMobile? 0 : 0,
        y: 160,
        duration: 1,
        ease: 'leaner',
        scrollTrigger: {
            trigger: ref.current,
            start: isMobile? "top 300%" : "top 100%",
            end: 'bottom 100%',
            scrub: true,
        },
        });
    }
    if (ref1.current) {
        gsap.from(ref1.current, {
        opacity: 0,
        x: 200,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ref1.current,
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: true,
        },
        });
    };
 
    }, []);
    
    return(
 
        <div 
          ref={ref} 
          className="w-full min-h-screen -mt-[70px] sm:-mt-[150px] rounded-t-[10vw] bg-white relative flex flex-col flex-wrap items-center overflow-hidden justify-between" id='teamMemmber'
        >
          <span 
            className='text-center absolute top-[50px] text-3xl'
            style={{fontFamily:`'Fredoka One', cursive`}}
          >MeetTeam
          </span>
          <DetailMemmber
            image={require("../assets/photo/org_bakhoda.png")}
            name={memmber.name+memmber.family}
            position={memmber.position}
            description={memmber.discription}
            skills={memmber.skills}
          />
          <div 
            style={{gap:20}}
            className="bg-slate-200 backdrop-blur-sm w-full flex flex-wrap items-center px-[50px] py-[10px] justify-center" 
            ref={ref1} 
          >
            {
                team.map((item,index)=>{
                    return(
                        <TeamMemmber 
                          key={index} 
                          name={item.family} 
                          image={item.profImage}  
                          url={item.web}
                          position={item.position}
                        />
                    )
                })
            }
          </div> 
        </div>
    )
}

const TeamMemmber =({name,image,position})=>{
  const [img40,set40] = useState('blur-lg')

    return(
        <div 
          className="text-gray-950 flex items-center justify-between flex-col rounded-[10px]"
        >
          <img 
            src={image}
            onLoad={()=> set40('')}
            className={`${img40} w-[100px] h-[100px] rounded-[50%] shadow-sm`}
          />
          <span className='mt-[5px] -tracking-tight  text-md drop-shadow-sm'>{name}</span>
          <span className='text-sm drop-shadow-sm font-bold'>{position}</span>
        </div> 
    )
}


const DetailMemmber =({image,name,description,position,skills})=>{
  const [img40,set40] = useState('blur-lg')
    return(
        <div 
          style={{gap:'10vw'}}
          className="w-full mt-[100px] flex flex-wrap items-center justify-center"
        >
          <img
            className={`${img40} bg-sky-200 border-b-[10px] w-[30vw] h-[40vw] min-w-[300px] min-h-[400px] object-cover rounded-br-[70%] rounded-bl-[100%]`}
            src={image} 
            onLoad={()=> set40('')}
            alt="profile"
          />   
          <div
            style={{gap:40}}
            className="flex items-center justify-center flex-wrap w-full py-[20px] sm:w-[40%] px-[60px]"
          >
            <div className='w-full flex flex-col items-start justify-center'>
              <span className='m-auto text-3xl flex flex-wrap'>{name}</span>
              <span className='m-auto text-2xl font-bold'>{position}</span>
              <p className='text-red-10 mt-[20px] text-justify'>{description}</p>
            </div>
            <div 
              style={{gap:10}}
              className="w-full flex flex-row flex-wrap content-center  items-center justify-center"
            >
             {
               skills.map((item,i)=>{
                  return(
                    <div key={item+i} className="p-[10px] flex-grow justify-center items-center rounded-md bg-black/10 flex">
                        <WorkspacePremiumIcon className='text-sky-500'/>
                        <span className='text-center font-bold block text-sky-700 text-lg'>{item}</span>
                    </div>
                )
              })
             }
            </div> 
          </div>
        </div>
    )
}

export default App;