import './NavBar.css'
import Dog from "../assets/Standing-Dog-Logo.jpg"

const NavBar = ()=>{


    return(
        <div className='begin'>
            <div className='begin-1'>
                <img src={Dog}/>
            </div>
            <div className='begin-3'>
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
            <p>Contacts</p>
            <button>Preview</button>
            </div>
        </div>

    
    )
}

export default NavBar