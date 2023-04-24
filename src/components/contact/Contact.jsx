import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {SlSocialInstagram} from 'react-icons/sl';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f44xv4s', 'template_j3j8ilo', form.current, 'BociOcLZNbziM2imF')
    .then((result) => {
        console.log(result.text);
        window.location.reload();
    }, (error) => {
        console.log(error.text);
    });
    
    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Form</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>olamidelalaolufade@gmail.com</h5>
            <a href="mailto:olamidelalaolufade@gmail.com" target='_blank' rel="noreferrer"> Send an Email</a>
          </article>
          
          <article className="contact__option">
            <SlSocialInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>olamide.olufade</h5>
            <a href="https://instagram.com/olamide.olufade" target='_blank' rel="noreferrer"> Send a DM</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+44 7******</h5>
            <a href="https://api.whatsapp.com/send?phone+447404438945" target='_blank' rel="noreferrer"> Send a Message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='First name and last name' required />
          <input type='email' name='email' placeholder='Enter your email' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <div className='contact__btn'>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact