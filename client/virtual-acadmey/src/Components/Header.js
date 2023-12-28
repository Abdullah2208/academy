import '../App.css'
import Logo from '../Icons/Logo.png'
import Hamburger from '../Icons/hamburger.svg'
import { useState} from 'react'


function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return(
        <header>
            <div className='upper-header'>
                <img src={Logo} alt='logo'/>
                <div><img src={Hamburger} alt='Hamburger' width={'30px'} onClick={handleClick}/></div>
            </div>

            <nav  className={isOpen? 'navOpen': ''}>
                <ul>
                    <li>Home</li>
                    <li  onClick={() => props.onClick('coursesRef')}>Courses</li>
                    <li onClick={() => props.onClick('testimonialRef')}>Testimonials</li>
                    <li onClick={() => props.onClick('faqRef')}>FAQ's</li>
                    <li onClick={() => props.onClick('contactRef')}>Contact</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;