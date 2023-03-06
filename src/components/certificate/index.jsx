import './style.css'
import {token} from '../../them'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Certificate =(props)=>{
    const color =  token;
    return(
        <div className='certificate'
            style={{
                background: color.blue[300],
            }}
        >
           <a style={{ color: color.gray[900]}} className='showmore' href={props.url}>More<ExpandMoreIcon style={{fontSize:'25px'}}/></a>
           <img src={props.img} className='imageCertificate'/>
        </div>
    )
}


const App =()=>{
 const color = token;
    return(
        <div style={{ width: '100%',marginBottom:"20px"}} id="certificate">
                <h1 style={{margin:'10px auto 10px auto',textAlign:'center', color: color.blue[600],}}>Certificates</h1>
                <div style={{padding:'1vh 10px', overflowX:'scroll'}}>
                    <div className='certificateWrapper'>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DGZC5R89KH98/CERTIFICATE_LANDING_PAGE~DGZC5R89KH98.jpeg'}
                            title="React Basic"/>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB.jpeg'}
                            title="React Advance"/>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB.jpeg'}
                            title="React Advance"/>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB.jpeg'}
                            title="React Advance"/>
                        <Certificate 
                            url={'https://www.coursera.org/account/accomplishments/verify/DGZC5R89KH98'}
                            img={'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB/CERTIFICATE_LANDING_PAGE~VWR38PXGXRQB.jpeg'}
                            title="React Advance"/>
                    </div>
            </div>
        </div>
    )
}

export default App;