import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Ribbon from './Components/Ribbon';
import Courses from './Components/Courses';
import Testimonials from './Components/Testimonials';
import FAQs from './Components/FAQ';
import Footer from './Components/Footer';
import { useRef } from 'react';

function App() {
    const contactRef = useRef(null)
    const coursesRef = useRef(null)
    const testimonialRef = useRef(null)
    const faqRef = useRef(null)

    const handleClick = (refName) => {
        const refToScroll = typeof refName === 'string' ? 
          { 'contactRef': contactRef, 'coursesRef': coursesRef, 'testimonialRef': testimonialRef, 'faqRef': faqRef }[refName] : refName;

        refToScroll?.current?.scrollIntoView({ behavior: 'smooth' });
    }


    return(
        <div style={{overflowX: 'hidden'}}>
            <Header onClick={handleClick}/>
            <Landing onClick={handleClick}/>
            <Ribbon />
            <Courses onClick={handleClick} ref={coursesRef} />
            <Testimonials ref={testimonialRef} />
            <FAQs onClick={handleClick} ref={faqRef}/>
            <Footer ref={contactRef}/>
        </div>

    )
}

export default App