import './style.css'
import {token} from '../../them'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradeIcon from '@mui/icons-material/Grade';

const Proj = (props)=>{
   
    const color =  token;

    return(

        <div className='proj'>
                <div className='headerBox'>
                    <div className='iconProj'
                        style={{
                            color: color.gray[900],
                            background: color.orange[100]
                        }}
                    >
                        <FavoriteIcon className='projIcon'/>
                        <ChatIcon className='projIcon'/>
                        <ExpandMoreIcon className='projIcon'/>
                    </div>
                    <div className='details'
                        style={{
                            color: color.gray[900],
                            background : color.blue[100]
                        }}
                    >
                        <h2 style={{ fontWeight: 'bolder', fontSize: '25px'}}>{props.title}</h2>
                        <h5 style={{ fontWeight: '400', fontSize: '16px'}}>{props.date}</h5>
                        <StarCreator/>
                    </div>
                </div>
                <img src={props.url} className="projImg"alt='image'/>
              </div>
    )
}

const StarCreator = (props) => {
    return(
        <span><GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/></span>
    )
}



const App =()=>{
    
    const color =  token;
    
    return(
        <div className='projectContainer'
            style={{
                background: color.blue[800]
            }}
        >
            <div className="projectsWrapper">
              <Proj title='AdminDashboard' date='4 March 2022' url='https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
              <Proj title='Design a website' date='10 June 2022' url='https://images.pexels.com/photos/3805759/pexels-photo-3805759.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' star={2}/>
              <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/13804931/pexels-photo-13804931.jpeg?auto=compress&cs=tinysrgb&w=600' star={2}/>
              <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' star={2}/>
              <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' star={2}/>
              <Proj title='Design_Website' date='25 October 2022' url='https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1600' star={2}/>
            </div>
                <ExpandMoreIcon className='nextIcon'
                    style={{
                        color: color.gray[300]
                    }}
                />
        </div>
    )
}

export default App;