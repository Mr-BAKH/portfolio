import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import React,{useRef, useEffect} from "react"
import {comment} from '../data/index'


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
             start: 'top 80%',
             end: 'bottom 90%',
             scrub: true,
          },
          });
      };
      }, []);

    return(
        <div ref={ref} className="w-full min-h-[500px] mt-[50px] flex-col flex justify-evenly pt-[10px]" id="Comment">
            <h1 
              className="text-center text-orange-300 text-3xl"
              style={{fontFamily:`'Fredoka One', cursive`}}
            >Comment
            </h1>
           <div className="w-full py-[50px] overflow-x-scroll h-full px-[30px] flex flex-row items-center justify-start">
            {
                comment.map((item,i)=>{
                    return(
                        <CommentBox
                          number={i}
                          key={i}
                          name={item.name}
                          comment={item.comment}
                          image={item.img}
                        />
                    )
                })
            }
              </div>
    
        </div>
    )
}

const CommentBox = ({image,name,comment,number})=>{

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  console.log(number)

  useEffect(() => {
      if (ref.current) {
          gsap.from(ref.current, {
          opacity: 0,
          y: 100+number*20,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
             trigger: ref.current,
             start: 'top 100%',
             end: 'bottom 100%',
             scrub: true,
          },
          });
      };
      }, []);

  return(
      <div ref={ref} className="shadow-2xl transition-all duration-150 ease-in py-[40px]  shadow-orange-600  flex min-w-[300px] max-h-[500px] flex-col items-center justify-start p-[5px] rounded-[10px] m-[10px] text-justify border-[2px] border-slate-50" >
          <img
            className="mb-[10px] sha w-[200px] object-cover h-[200px] rounded-[50%] block shadow-lg shadow-orange-600/80 border-orange-600 border-[5px]"
            src={image}
          />
          <h4
            className="text-orange-700 text-md font-bold"
          >{name}
          </h4>
          <p
            className="p-[10px] text-gray-900 mt-[5px] font-bold text-sm text-center"
          >{comment}
          </p>
      </div>
  )
}


export default App;