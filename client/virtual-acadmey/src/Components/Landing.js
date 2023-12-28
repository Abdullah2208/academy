import '../App.css'
import mainImg from '../Icons/main-img.jpg'
import Star from '../Icons/Star.svg'

const Landing = (props) => {

        return (
            <div className='landing-box'>
                <div className='translate landing-content'>
                    <div><h1>Your learning, <br />your way.</h1></div>
                    <div><p>Elevate your skills & knowledge with <br />our cutting-edge platform.</p></div>
                    <div><button onClick={() => props.onClick('contactRef')}>Start now</button></div>
                    <div><img src={Star} alt='star' draggable={false}/> <p><b>Excellent</b> 4.9 out of 5</p></div>
                </div>
                <div className=' landing-img-div'><img className='zoomOut' src={mainImg} alt='decoration'/></div>
            </div>
        )
      };

export default Landing;