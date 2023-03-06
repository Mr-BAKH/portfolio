import React, {useRef, useEffect} from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from "gsap/dist/ScrollSmoother";

export default function App() {
//...
gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

let smoother = ScrollSmoother.create({
    smooth: 3,
    effects: true,
    speed: 1.5,
    pause: true,
    scrollX: true,
})
  return(
    <>
        <div style={{width:'100%', height:'400vh', background: 'gold'}}></div>
    </>
  )
}