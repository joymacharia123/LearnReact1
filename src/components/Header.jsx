import './Header.css'
import DogPic from "../assets/dogpic.jpg"

const Header = ()=>{
    return(
        <div className='middle'>
            <h2>
            Welcome to our online haven for dog lovers! Step into a world where wagging tails and wet noses reign supreme. Our virtual kennel is a place where companionship meets delight, offering a curated selection of canine companions ready to steal your heart. Whether you're seeking the boundless energy of a playful puppy or the loyal companionship of a seasoned friend, we're here to match you with your perfect furry match. Explore our virtual kennel and discover the joy that comes from bringing home your new best friend. Unleash the love today
            </h2>
            <div className='middle-2'>
            <img src={DogPic}/>
            </div>
        </div>
    )
}

export default Header