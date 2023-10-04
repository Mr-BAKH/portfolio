import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from 'gsap'

import WritingImg from '../assets/photo/me2.png'
import React,{useRef , useEffect } from "react"

const App = ()=>{

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const [img40,set40] = useState('blur-lg')


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
 if (ref1.current) {
     gsap.from(ref1.current, {
     opacity: 0,
     y: '10vh',
     duration: 2,
     ease: 'power2.out',
     scrollTrigger: {
        trigger: ref1.current,
        start: 'top 90%',
        end: 'bottom 100%',
        scrub: true,
     },
     });
 }

 }, []);
    
    return(
      <div ref={ref} className='w-full -mt-[40vh] mb-[5vh] sm:-mt-[100vh]  flex-col h-screen flex items-center justify-end relative'>
        <img 
          onLoad={()=> set40('')}
          className={`${img40} w-full sm:rounded-t-none sm:rounded-r-[10vh] drop-shadow-xl top-0 sm:w-[50vh] left-0 sm:absolute z-0 h-[100vh] sm:h-[80vh] object-right object-cover`} src={WritingImg} alt='image'/>
        <div
          ref={ref1} 
          style={{gap:15}}
          className='flex -mt-[10vh] w-11/12 shadow-lg shadow-purple-400 p-5  backdrop-blur-sm bg-slate-900 rounded-3xl justify-center items-center flex-row flex-wrap'
        >
          <Contact href={'https://telegram.dog/Mrbakh2'} img={require('../assets/photo/logo/Telegram_2019_Logo.svg.png')}/>
          <Contact href={'https://github.com/Mr-BAKH'} img={require('../assets/photo/logo/1_wotzQboYWAfaj-7bvGNIkQ.png')}/>
          <Contact href={'mailto:mr.bakh.usb@gmail.com'} img={require('../assets/photo/logo/Gmail_icon_(2020).svg.png')}/>
          <Contact href={'https://api.whatsapp.com/send?text=hello mrbakh my name is &phone=989154968488'} img={require('../assets/photo/logo/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png')}/>
          <Contact href={'https://www.linkedin.com/in/amirhosseinbakhoda'} img={require('../assets/photo/logo/Linkedin-Logo1.png')}/>
        </div>
      </div>
                    
    )
}

export default App;


const Contact = ({href,img})=>{
  return(
    <a 
    href={href}
    target='_blank'
    className='cursor-pointer transition-all duration-100 ease-in  hover:bg-black p-5 rounded-3xl'
  >
    <img 
      className='sm:h-[70px] flex-grow h-[50px]   object-contain rounded-md'
      src={img}
    />
  </a>
  )
}