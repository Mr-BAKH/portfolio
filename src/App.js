import Home from "./components/Home/index"
import Proj from "./components/projects/index"
import Footersite from "./components/footer/index"
import Certificate from "./components/certificate/index"
import ContactUs from "./components/contactus/index"
import Ads from "./components/ads/index";
import Team from "./components/Team/index";
import Comment from "./components/comment/index";
import React from 'react';



import {token} from './them'


function App() {

  const color =  token;
  
  return (
    <div style={{background: color.gray[100]}}>
      <Home/>
      <Proj/>
      <Comment/>
      <Team/>
      <Ads/>
      <Certificate/>
      <ContactUs/>
      <Footersite/>
      {/* <Img/> */}
      {/* <GSAP/> */}
    </div>

  );
}

export default App;
