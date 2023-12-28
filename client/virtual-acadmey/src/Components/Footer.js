import '../App.css'
import Form from './Form'

import Pin from '../Icons/pin.svg'
import Phone from '../Icons/phone.svg'
import Email from '../Icons/mail.png'
import React, { forwardRef } from 'react'

const Footer = (props, ref) => {
    return (
        <div className='contact' ref={ref}>
            <div className='contact-us'>
                <h1>Contact Us</h1>
                <p>Got questions or need assistance? Reach out to us—your learning journey matters, and we're here to help. Contact us today!</p>
                <div className='contact-info'>
                    <div><img src={Email} alt='email' width={'40px'}/><span>email@example.com</span></div>
                    <div><img src ={Phone} alt='phone' width={'40px'}/><span>+1 xxx xxx0000</span></div>
                    <div><img src={Pin} alt='xyz, country' width={'40px'}/><span>xyz, country</span></div>
                </div>
            </div>
            <div>
                <Form />
            </div>
        </div>


    )
}

export default forwardRef(Footer);