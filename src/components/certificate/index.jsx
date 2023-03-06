import './style.css'
import {token} from '../../them'


const Certificate =(props)=>{
    const color =  token;
    return(
        <div className='certificate' style={{background: color.blue[500]}}>
            <a style={{background: color.gray[100],color:color.blue[700],fontSize:'20px',fontWeight:'900',textDecoration:'none'}} href={props.url}>
                <div className='imageBox11' style={{ backgroundImage:`url(${props.img})`}}></div>
            </a>
    </div>
    )
}


const App =()=>{
 const color = token;
    return(
        <div style={{ width: '100%',marginBottom:"20px"}} id="certificate">
                <h1 style={{padding: '10px',width:'99%',margin:'10px auto 10px auto',textAlign:'center', color: color.blue[600], border:`2px solid ${color.blue[500]}`, borderRadius:'10px', boxShadow:`0 0 5px ${color.blue[500]}`}}>Certificates</h1>
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