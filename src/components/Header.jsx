import './Header.css'
import DogPic from "../assets/dogpic.jpg"

const Header = ()=>{
    return(
        <div className='middle'>
            <div className='middle-3'>
            <h1>Hi, Am Joy,</h1>
            <p>Just learning Software Dev!</p>
            </div>
            <div className='middle-2'>
            <img src={DogPic}/>
            </div>
        </div>
    )
}

export default Header