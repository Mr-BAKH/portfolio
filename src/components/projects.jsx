import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { project } from '../data';
import React,{useRef , useEffect, useState } from "react"


let Proj = ({title,date,img,number})=>{

  const [img40,set40] = useState('blur-lg')
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
    if (ref.current) {
        gsap.from(ref.current, {
        opacity: 0,
        y: 100+number*20,
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
  },[])
    return(
        <div ref={ref} className='w-[300px] sm:w-[400px] transition-all duration-300 ease-in flex backdrop-blur-lg justify-center bg-black/50 shadow-2xl shadow-sky-400 overflow-hidden  flex-col border-b-[10px] border-b-slate-50 rounded-[10px]'>
            <img 
              className={`w-full max-h-[70vh] object-contain ${img40}`}
              src={img}
              onLoad={()=>set40('')}
            />
          <div className=" w-full text-slate-50 p-[10px]  bg-black  flex flex-col items-center text-lg ">
            <span className='text-md'>{title}</span>
            <span className='text-sm'>{date}</span>
          </div>
        </div>
    );
};




const App =()=>{

  const [activeType,setActiveType] = useState('Website')
  const type = ['MobileApp','Website','Logo']
  const [proj, setProj] = useState(project)
    
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {

    if (ref.current) {
        gsap.from(ref.current, {
        opacity: 0,
        x: -200,
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
        <div 
          ref={ref} 
          className='w-full text-slate-100 bg-sky-950 rounded-t-[10vw] overflow-hidden h-screen relative -mt-32' 
          id='Projects'
        >
            <div className='absolute z-10 flex w-full mt-5 items-center justify-between px-[10vw] flex-row'>
              <h1
                className='hidden sm:block text-3xl text-slate-50'
                style={{fontFamily:`'Fredoka One', cursive`}}
              >
                Latest projects
              </h1>
              <div  
                style={{gap:10}}
                className='flex flex-row m-auto sm:m-0 items-center justify-center'
              >
                {
                    type.map((item,index)=>{
                        let isactive = item === activeType? 'bg-slate-50 text-gray-800 ': 'text-slate-50'
                      return(
                        <span 
                          key={item+index} 
                          style={{cursor:'pointer'}}
                          className={`text-lg transition-all duration-200 ease-out block p-[15px] font-bold rounded-md cursor-pointer ${isactive}`}
                          onClick={()=> setActiveType(item)}
                        >{item}
                        </span>
                      )
                    })
                }
              </div>
            </div>
            <div className='w-full h-screen overflow-scroll overflow-y-hidden'>
              <div 
                style={{gap:20}}
                className="w-fit m-auto px-[50px] flex h-full justify-center content-center flex-row items-center"
              >
              {
                 proj[activeType].map((item,index)=>{
                    return(
                      <Proj 
                      key={item.img+index} 
                      number={index}
                      title={item.title} 
                      date={item.date} 
                      img={item.img}
                      />
                      )
                    })
              }
              </div>
            </div>
        </div>
    )
}

export default App;


