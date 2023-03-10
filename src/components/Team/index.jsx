import {token} from '../../them'
import './style.css'
import localimage from '../../assets/photo/bakh copy.png'
import Bakhoda from '../../assets/photo/1.png'
import Hayyati from '../../assets/photo/amirPhoto.jpg'
import Ryhanny from '../../assets/photo/2.jpg'
import Mddost from '../../assets/photo/4.jpg'
import Javad from '../../assets/photo/3.jpg'
import Farshid from '../../assets/photo/5.jpg'
import Circle from '../global/canvas'

const TeamMemmber =(props)=>{

    const color = token;

    return(
        <div className="container"
            style={{
                color: color.gray[100]
            }}
        >
            <img src={props.image} style={{width:'100px',height:'100px',borderRadius:"50%",boxShadow:`0 0 10px ${color.blue[400]}`}}/>
            <span style={{fontSize:'20px',textShadow:`0 0 10px ${color.blue[800]}`}}>{props.name}</span>
            <span style={{fontSize:'12px',textShadow:`0 0 10px ${color.blue[800]}`}}>{props.position}</span>
        </div> 
    )
}

const ProgCircle = (props)=>{

    const color = token;
    
    return(
        <div className="circle1">
            <span style={{gap:'1px',display:'flex',flexDirection:'column',width:'80%',flexWrap:'wrap',alignItems:'center', justifyContent:"center",position:'absolute',rotate:'90deg',color:color.blue[700],fontSize:'20px'}}>
                <span style={{display:'block'}}>{props.prog}%</span>
                <span style={{textAlign:'center', display:'block',color:color.orange[600],fontSize:'16px'}}>{props.title}</span>
            </span>
            <span style={{display:'block'}}><Circle wid={100} color={color.gray[400]} d={360} widline={5}/></span>
            <span style={{display:'block', position:'absolute'}}><Circle wid={100} color={color.blue[700]} d={props.prog*360/100} widline={5}/></span>
        </div>
    )
}

const DetailMemmber =()=>{
    return(
        <div className="centerWrapper">
        <div className="detail">
            <span style={{fontSize:"50px"}}>AmirHosseinBakhoda</span>
            <br/>
            <span style={{fontSize:"20px",fontweight:"300"}}>FullStack</span>
            <p style={{marginTop:'10px',wordSpacing:'2px',wordBreak:'break-word',wordWrap:"break-word"}}>ChatGPT is a member of the generative pre-trained transformer (GPT) family of language models. It was fine-tuned (an approach to transfer learning[6]) over an improved version of OpenAI's GPT-3 known as "GPT 3.5".[7] The fine-tuning process leveraged both supervised learning as well as reinforcement learning in a process called reinforcement learning from human feedback (RLHF).[8][9] Both approaches used human trainers to improve the model's performance.reate 'reward models' that the model was further fine-tuned on using several iterations of Proximal Policy Optimization (PPO).[8][11] Proximal Policy Optimiza</p>
            <div className="canvasCircle">
                <ProgCircle title="Css" prog={94}/>
                <ProgCircle title="NodeJs" prog={84}/>
                <ProgCircle title="ReactJs" prog={81}/>
                <ProgCircle title="UI/UX" prog={85}/>
            </div>
        </div>
        <div className="image">

            <img style={{width:'90%', height:'100%', objectFit:'cover'}} src={localimage} alt="profile" />
        </div>
    </div>
    )
}

const App = ()=>{

    const color = token;

    return(
        <div className="mainContainer" id='teamMemmber'>
            <span style={{textAlign:'center',height:'5vh', fontSize:'40px', fontFamily:`'Fredoka One', cursive`}}>Team</span>
                   <DetailMemmber/>
                <div className="partTeam">
                    <TeamMemmber name='Mr.Bakhoda' image={Bakhoda} position='FrontEnd'/>
                    <TeamMemmber name='Mr.Shekariyan' image={Javad} position='BackEnd'/>
                    <TeamMemmber name='Mr.Hayyati' image={Hayyati} position='FrontEnd'/>
                    <TeamMemmber name='Miss.Ryhanny' image={Ryhanny} position='UI/UX'/>
                    <TeamMemmber name='Mr.MdDost' image={Mddost} position='WorldPress'/>
                    <TeamMemmber name='Mr.Yazid' image={Farshid} position='WorldPress'/>
                </div>
        </div>
    )
}

export default App;