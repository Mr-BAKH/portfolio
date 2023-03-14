// import addresImage from '../../src/assets/photo/pexels-roberto-nickson-2478248.jpg'
import localimage from '../../assets/photo/bakh copy.png'

const App =()=>{
    
    return(
        <div style={{width:'fit-content',height:'fit-content',position: 'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={localimage} alt="amirIage" style={{
                width: '50vw',
                height: '50vw',
                textShadow: '2px 2px red',
                postion:'relative',
                zIndex:'3'
            }}/>
            <img src={localimage} alt="amirIage" style={{
                width: '50vw',
                height: '50vw',
                top: '0',   
                position:'absolute',
                filter:"blur(1px)",
                zIndex:'2'
            }}/>
        </div>
    )
}

export default App;