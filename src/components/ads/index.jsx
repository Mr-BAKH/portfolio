
import {token} from '../../them'
import './style.css'

const App = ()=>{

    const color =  token;

    return(
        <div className="adsContainer"
            style={{
                background: color.gray[200]
            }}
        >
            <div className="adsWrapper">
                <img src="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png" className='adsImg'/>
                <img src="https://camo.githubusercontent.com/289222c4bc6ec9172d6a51b6f5b2bde34d29167742e462a9249daf9f5a1294c8/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a6371517359346d676f42627a5767475f584359536a672e706e67" className='adsImg'/>
                <img src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png" className='adsImg'/>
                <img src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png" className='adsImg'/>
                <img src="https://1stwebdesigner.com/wp-content/uploads/2020/01/1stwebdesigner-logo-2020.png" className='adsImg'/>
                <img src="https://www.ux-ui.net/ux/uploads/2017/03/ux-ui-logo.svg" className='adsImg'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" className='adsImg'/>
                {/* <img src="" className='adsImg'/> */}
            </div>
        </div>
    )
}

export default App;