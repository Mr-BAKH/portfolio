import '../index.css'
import React from 'react'
import Home from "../components/home"
import Proj from "../components/projects"
import Team from "../components/team";
import Comment from "../components/comment";
import Certificate from "../components/certificate"
import ContactUs from "../components/contactus"
import Footersite from "../components/footer"


const Screen = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Home/>
      <Proj/>
      <Team/>
      <Comment/>
      <Certificate/>
      <ContactUs/>
      <Footersite/>
   </div>
  )
}

export default Screen
