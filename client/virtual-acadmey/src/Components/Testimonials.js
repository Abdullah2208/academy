import '../App.css'
import clientOne from '../Icons/client-one.jpg'
import clientTwo from '../Icons/client-two.jpg'
import clientThree from '../Icons/client-three.jpg'
import { forwardRef } from 'react'

function Testimonials (props,ref) {

    const arr = [
        {
            des: "Embarking on my learning journey with this platform has been nothing short of transformative. The intuitive interface, engaging content, and supportive community made my learning experience enriching. it's a journey of growth and empowerment.",
            icon: clientOne,
            name: 'Lisa Jhonson',
            index: 1
        },
        {
            des: "Enrolling in the computer courses exceeded my expectations. The comprehensive curriculum allowed me to master various tech skills. The instructors were knowledgeable and supportive, and the interactive learning environment made the complex topics easy to grasp.",
            icon: clientTwo,
            name: 'Leonard Jones',
            index: 2
        },
        {
            des: "Subjects courses on this platform redefine learning. From foundational principles to advanced skills, each course is a valuable addition. The engaging curriculum and interactive materials make the journey both enjoyable and enlightening.",
            icon: clientThree,
            name: 'Arlene Miles',
            index: 3
        }
    ]
    return (
        <div className='testimonials' ref={ref}>
            <h1>What People Say About Us</h1>
            <div className='testimonials-div'>
                {arr.map(testimoni => {
                    return (
                        <div key={testimoni.index} className='testimony'>
                            <div><p>⭐⭐⭐⭐⭐</p></div>
                            <div>"{testimoni.des}"</div>
                            <div className='personal-info'>
                                <img src={testimoni.icon} draggable={false} alt='pfp'/>
                                <div>
                                    <p style={{color: 'black', fontWeight: 'bold'}}>{testimoni.name}</p>
                                    <p>Student</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default forwardRef(Testimonials) ;