import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zzymamp', 'template_3u5f11i', form.current, 'fk7ZwdCmeQ4HxHT3J')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
       
    };
    return (
        <section id = 'contact'>
            <div id = "stars"></div>
            <div id = "stars2"></div>
            <div id = "stars3"></div>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className = "contact__option">
                        <MdEmail className = "contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>longbhuynh019@gmail.com</h5>
                        <a href = "mailto:longbhuynh019@gmail.com" target = "_blank">Send a message</a>
                    </article>

                    <article className = "contact__option">
                        <FaFacebookMessenger className = "contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Bao Long</h5>
                        <a href = "https://m.me/huynhl91" target = "_blank">Send a message</a>
                    </article>

                    <article className = "contact__option">
                        <IoLogoWhatsapp className = "contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+1 (617) 283-6031</h5>
                        <a href = "https://api.whatsapp.com/send?phone=16172836031" target = "_blank">Send a message</a>
                    </article>


                </div>
                <form ref = {form} onSubmit = {sendEmail}>
                    <input type = "text" name = "name" placeholder = "Your Full Name" required />
                    <input type = "email" name = "email" placeholder = "Your Email" required />
                    <textarea name = "message"  rows = "7" placeholder = "Your Message" />
                    <button type = "submit" className = "btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact
