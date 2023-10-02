import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import React,{useRef, useState , useEffect } from "react"
import { ourteam } from '../data'


const Certificate =({img,title})=>{
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
         start: 'top 100%',
         end: 'bottom 100%',
         scrub: true,
      },
      });
  }
  }, []);

    return(
        <div ref={ref} className='w-6/6 sm:w-[300px] bg-sky-100 h-[210px] flex mt-[20px] items-center justify-between relative shadow-md shadow-sky-700'
        >
          <sapn className='font-semibold text-center py-[5%] bg-black/50 w-full text-md text-slate-50 drop-shadow-lg tracking-wider shadow-sky-600 absolute bottom-0 backdrop-blur-sm'>{title}</sapn>
         <img src={img} className='w-full h-full object-cover'/>
        </div>
    )
}


const App =()=>{

 
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
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: true,
     },
     });
 }
 }, []);

    return(
        <div ref={ref}  className='w-full sm:w-5/6 m-auto mt-[100px] min-h-[500px] py-[1vw]' id="certificate">
                <h1
                  className='text-center text-3xl text-sky-600 '
                  style={{fontFamily:`'Fredoka One', cursive`}}
                >Certificates
                </h1>
                <div 
                  
                  style={{gap:20}}  
                  className='w-full p-[5vh] py-[1vh] flex-row flex items-center flex-wrap justify-center'
                >
                {ourteam.member[0].certificates?.map((item,i)=>{
                    return(
                        <Certificate 
                          key={i} 
                          title={item.title} 
                          url={item.url} 
                          img={item.img}
                        />
                    )
                })} 
                </div>
        </div>
    )
}

export default App;