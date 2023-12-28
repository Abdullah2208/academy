import React, { forwardRef, useState } from 'react';
import '../App.css';
import Chevron from '../Icons/chevron.svg';

const arr = [
  {
    ques: 'How the classes will be conducted?',
    ans:
      'The classes will be conducted through Zoom. An educational class will be held on zoom where our experts will teach the students in an interactive and engaging way.',
    index: 1,
  },
  {
    ques: 'How many courses do you offer?',
    ans:
      'We offer a wide variety of courses, from Quranic courses to computer & subject courses. We ensure that our students can get the best online education experience. For more details, contact us now!',
    index: 2,
  },
  {
    ques: 'What are the prices of your courses?',
    ans: 'The prices can vary from course to course. For pricing details, contact us now!',
    index: 3,
  },
  {
    ques: 'How long will I have access to Zoom session recordings?',
    ans:
      'Recordings of Zoom sessions will be made available for review after the live session concludes, providing you the flexibility to revisit the content at your convenience.',
    index: 4,
  },
];

function FAQs(props, ref) {
  const [faqState, setFaqState] = useState(arr);

  const toggle = (index) => {
    setFaqState(prev => 
        prev.map(faq => 
            faq.index === index ? { ...faq, isOpen: !faq.isOpen } : faq
        )
    ) 
  }


  return (
    <div className='faqs' ref={ref}>
        <h1>Frequently Asked Questions</h1>
        <p>Discover answers to common queries and gain clarity with our FAQs</p>
        <div className='faqs-boxes-div'>
        {faqState.map((q) => (
            <div key={q.index} className='faq-box'>
                <div onClick={() => toggle(q.index)}>
                    <p>{q.ques}</p>
                    <img
                        src={Chevron}
                        alt='chevron'
                        role='button'
                        width='20px'
                        draggable={false}
                        className={q.isOpen ? 'rotate' : ''}
                    />
                </div>
                <div>
                    <p className={q.isOpen ? '' : 'hidden'}>{q.ans}</p>
                </div>
        </div>
        ))}
        </div>
    </div>
  );
}

export default forwardRef(FAQs) ;
