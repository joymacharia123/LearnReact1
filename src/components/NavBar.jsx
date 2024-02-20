import './NavBar.css'
import Dog from "../assets/Standing-Dog-Logo.jpg"
import { Link } from 'react-router-dom'

const NavBar = ()=>{


    return(
        <div className='begin'>
            <div className='begin-1'>
                <img src={Dog}/>
            </div>
            <div className='begin-3'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
        </div>

    
    )
}

export default NavBar