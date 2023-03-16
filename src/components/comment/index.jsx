import "./style.css";
import {token} from '../../them'
import React,{useRef, useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img2 from '../../assets/photo/comment/comment1.jpg'
import img1 from '../../assets/photo/comment/comment2.jpg'
import img3 from '../../assets/photo/comment/comment3.jpg'
import img4 from '../../assets/photo/comment/comment4.png'


const CommentBox = (props)=>{

    const color =  token;
    
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    
    useEffect(() => {
        if (ref.current) {
            gsap.from(ref.current, {
            opacity: 0,
            x: -100,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: ref.current,
               start: 'top 80%',
               end: 'bottom 90%',
               scrub: true,
            },
            });
        }
        }, []);


    return(
        <div className="comment" ref={ref}
            style={{
                background: color.orange[600] ,
                boxShadow: `0 0 5px ${color.orange[500]}`
            }}
        >
            <span style={{boxShadow:`0 0 10px ${color.orange[500]}` ,border:`5px solid ${color.orange[300]}`, marginBottom:'10px',borderRadius:'50%',display:'block',width:"100px", height:'100px',
            backgroundImage:`url(${props.image})`,
            backgroundPosition: '40% 30%',
            backgroundSize:"cover",
            backgroundRepeat: 'no-repeat',
            }}></span>
            <h4 style={{ color: color.gray[100], fontSize:'20px'}}>{props.userName}</h4>
            <p style={{color: color.gray[900], marginTop:'5px', fontWeight:'400', wordBreak:"break-word"}}>{props.comment}</p>
        </div>
    )
}



const App =()=>{
    
    const color =  token;

    return(
        <div className="commentContainer" id="Comment">
            <h1 style={{
                textAlign:'center',
                color: color.orange[400],
                fontFamily:`'Fredoka One', cursive`
            }}>Comment</h1>
           <div className="commentWrapper">
                        <CommentBox userName='Joy' comment="Thank you for the beautiful design you did for my personal site. I will come to you again next time" image={img1}/>
                        <CommentBox userName='Susan' comment="I think I did the right thing to meet you." image={img2}/>
                        <CommentBox userName='Sara' comment="After doing the whole job, you got my attention, you are great. Thankful"  image={img3}/>
                        <CommentBox userName='Homan' comment="I saw good work from you. Maybe I can recommend you to my friends."  image={img4}/>
                     </div>
    
        </div>
    )
}

export default App;