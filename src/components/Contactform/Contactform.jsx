import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div className='bg-blue-200 min-h-screen flex items-center justify-center'>
            <div className='bg-white shadow-lg w-full max-w-lg p-8'>
                <div className='text-center text-3xl text-blue-900 mb-8'>Contact Form</div>
                <form>
                    <div className='mb-4'>
                        <label htmlFor="fname" className='block text-left'>First Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="fname"
                            name="firstName"
                            placeholder="First Name"
                            className='border-2 border-indigo-100 rounded-md w-full p-2 bg-indigo-100'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="lname" className='block text-left'>Last Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="lname"
                            name="lastName"
                            placeholder="Last Name"
                            className='border-2 border-indigo-100 rounded-md w-full p-2 bg-indigo-100'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-left'>Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="mail"
                            name="email"
                            placeholder="Email"
                            className='border-2 border-indigo-200 rounded-md w-full p-2 bg-indigo-200'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="phone" className='block text-left'>Phone Number</label>
                        <input
                            onChange={handleChange}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className='border-2 border-indigo-200 rounded-md w-full p-2 bg-indigo-200'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="address" className='block text-left'>Address</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            className='border-2 border-indigo-300 rounded-md w-full p-2 bg-indigo-300'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="message" className='block text-left'>Message</label>
                        <textarea
                            onChange={handleChange}
                            id="message"
                            name="message"
                            placeholder="Type your message here"
                            className='border-2 border-indigo-300 rounded-md w-full p-2 h-24 bg-indigo-300'
                        />
                    </div>
                    <div className='text-center'>
                        <button className='border-2 border-indigo-300 rounded-md p-2 w-24 bg-indigo-300' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
