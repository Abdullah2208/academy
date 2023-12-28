import '../App.css'
import Quran from '../Icons/quran.jpg'
import laptop from '../Icons/laptop.jpg'
import books from '../Icons/books.jpg';
import { forwardRef } from 'react';


function Courses (props,ref) {


    const arr = [
        {
          icon: Quran,
          title: 'Quran courses',
          des: 'Dive into the wisdom of our Quran courses, a transformative blend of knowledge, spirtuality, illuminate your path, deepen your connnection, and embark on a soul-enriching journey today',
          index: 1
        },
        {
          icon: laptop,
          title: 'Computer Courses',
          des: 'Unleash your digital potential with our computer courses. Master the world of technology, enhance your skills, and chart a course for success in the digital realm. Start your journey now',
          index: 2
        },
        {
          icon: books,
          title: 'Subject courses',
          des: 'Unlock the doors to academic excellence with our diverse range of subjects courses. Explore, excel, and redefine your journey. Start your pursuit of knowledge today',
          index: 3
        }
      ];

    return (
        <div className='courses' ref={ref}>
            <h1>Our Courses</h1>
            <p>Explore the enriching world of Quranic wisdom, master the art of technology with our computer courses, and delve into academic excellence with our diverse range of subjects.</p>
            <div  className='card-div'>
                { arr.map(card => {
                    return (
                        <div key={card.index} className='card'>
                            <img src={card.icon} alt='Just a display'/>
                            <h2>{card.title}</h2>
                            <p>{card.des}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default forwardRef(Courses);