import "./style.css";
import {token} from '../../them'


const CommentBox = (props)=>{

    const color =  token;

    return(
        <div className="comment"
            style={{
                background: color.orange[600] ,
                boxShadow: `0 0 15px ${color.orange[500]}`
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
        <div className="commentContainer">
            <h1 style={{textAlign:'center',padding:'10px', color: color.orange[500], border:`2px solid ${color.orange[500]}`, borderRadius:'10px', boxShadow:`0 0 5px ${color.blue[500]}`}}>comments</h1>
            <div style={{width:'100%',height:'100%', overflowX:"scroll",boxShadow: `0 20px 0 ${color.gray[800]}`}}>
                <div className="commentWrapper">
                        <CommentBox userName='Tom' comment="good work" commet image={'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
                        <CommentBox userName='Joy' comment="Thank bro youre perfict." commet image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
                        <CommentBox userName='Susan' comment="Hi, I Reale love your project and i whant to send a new offer for my project" commet image={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                        <CommentBox userName='Sara' comment="I love you webpage, but i think you can be really better as soon as you can. I wish you so goodd. thanks. " commet image={'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                </div>
            </div>
        </div>
    )
}

export default App;