// import addresImage from '../../src/assets/photo/pexels-roberto-nickson-2478248.jpg'
import localimage from '../../assets/photo/bakh copy.png'

const App =(props)=>{
    
    return(
        <div style={{width:'fit-content',height:'fit-content',position: 'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={localimage} alt="amirIage" style={{
                width: '800px',
                height: '800px',
                textShadow: '2px 2px red',
                postion:'relative',
                filter:"hue-rotate(350deg)",
                zIndex:'3'
            }}/>
            <img src={localimage} alt="amirIage" style={{
                width: '802px',
                height: '802px',
                top: '0',   
                position:'absolute',
                filter:"blur(1px)",
                zIndex:'2'
            }}/>
            <img src={localimage} alt="amirIage" style={{
                width: '802px',
                height: '802px',
                left:'-9px',
                top: '0',   
                position:'absolute',
                filter:"blur(1px) brightness(0) opacity(0.5)",
                zIndex:'1'
            }}/>
            <img src={localimage} alt="amirIage" style={{
                width: '802px',
                height: '802px',
                left:'-14px',
                top: '-5px',   
                position:'absolute',
                filter:"blur(10px) brightness(0) opacity(0.4)",
                zIndex:'0'
            }}/>
        </div>
    )
}

export default App;