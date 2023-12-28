import '../App.css'
import { useState } from 'react'
import axios from 'axios'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        checkbox: false
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/send-message', formData);
        } catch (err) {
            console.log("Error is:", err)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name'
                    name='name'
                    min={3}
                    max={30}
                    placeholder='Enter your name'
                    required
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email'
                    type={'email'}
                    placeholder='Enter your Email'
                    required
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='message'>Message</label>
                <textarea 
                id='message' 
                name='message' 
                rows="5" 
                cols="50"
                placeholder='Type anything...'
                required
                onChange={handleChange}
                >
                </textarea>
            </div>
            <div>
                <input 
                    id='checkbox'
                    name='checkbox'
                    type={'checkbox'}
                    required
                    onChange={handleChange}
                />
{/* eslint-disable-next-line*/}
                <label htmlFor='checkbox'>I accept the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></label>
            </div>
            <div><button type="submit">Send Message</button></div>
        </form>
    )
}

export default Form;