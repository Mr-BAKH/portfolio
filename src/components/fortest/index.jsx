import Team from '../../data/index'
import { useEffect, useState } from 'react'


function App(){
    
    const showme = Team.map((item)=>{
        return(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <img src={item.certificates[0].img} style={{width:"200px", height:"200px", objectFit:'contain'}}/>
            </div>
        )
    })
    useEffect(()=>{
        console.log(showme)
    })

    return(
        <>
        <h1>hellow</h1>
        {showme}
        </>
    )
}
{/* <img src={require(item.img).default} style={{width:"200px", height:"200px", objectFit:'contain'}}/> */}

export default App;