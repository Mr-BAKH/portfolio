import '../index.css'
import React from 'react'
import Home from "../components/home"
import Proj from "../components/projects"
import Team from "../components/team";
import Comment from "../components/comment";
import Certificate from "../components/certificate"
import ContactUs from "../components/contactus"
import Footersite from "../components/footer"
import Loading from '../assets/animation_ln8xif74.json'
import Lottie from "lottie-react";
import Ads from '../components/ads'

import { useEffect,useState } from 'react';


const Screen = () => {
  const  [welcome,setWelcome] = useState(1)
  useEffect(()=>{
    setTimeout(() => {
      setWelcome(0)
    }, 3000);
  })
  if(0){
    return(
      <Lottie animationData={Loading} loop={true} className='mt-[20vh] mx-auto w-[250px] h-auto'/>
      )
    }
  return(
    <div className='w-full animate-open overflow-hidden transition-all duration-100'>
      <Home/>
      <Proj/>
      <Team/>
      <Comment/>
      <Certificate/>
      <Ads/>
      <ContactUs/>
      <Footersite/>
   </div>
  )
}

export default Screen
