/* eslint-disable react/jsx-no-target-blank */
// import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {IoLogoWhatsapp} from 'react-icons/io'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {MdSend} from 'react-icons/md'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqoc83b', 'template_6ica7z5', form.current, 'SSik8Eo7-KcKlXGTu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact' >
      <h5>get in contact</h5>
      <h2>contact me!</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>fajrissoba@gmail.com</h5>
            <a href="mailto:fajrissoba@gmail.com" target='_blank'>send me a message</a>
          </article>

          <article className="contact__option">
            <GrInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@fajjrisshoba</h5>
            <a href="https://www.instagram.com/fajjrisshoba/" target='_blank'>send me a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>1234-567-890</h5>
            <a href="https://api.whatsapp.com/send?phone=6281515111639" target='_blank'>send me a message</a>
          </article>

        </div>

        <form >
          <input type="text" name="name" id="your full name" />
          <input type="email" name="email" id="your email" />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message {MdSend}</button>
        </form>

      </div>
    </section>
  )
}

export default Contact