import "./style.css";
import {token} from '../../them'
import React,{useRef, useEffect} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const CommentBox = (props)=>{

    const color =  token;
    
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
            <p style={{color: color.gray[900], marginTop:'5px', fontWeight:'400'}}>{props.comment}</p>
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
                        {/* <CommentBox userName='Tom' comment="good work" commet image={'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600'}/> */}
                        <CommentBox userName='Joy' comment="Thank bro youre perfict." commet image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
                        <CommentBox userName='Susan' comment="Hi, I Reale love your project and i whant to send a new offer for my project" commet image={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        {/* <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/> */}
                </div>
    
        </div>
    )
}

export default App;