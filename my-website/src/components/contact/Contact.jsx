import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
    return (
        <section id = 'contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className = "contact__option">
                        <MdEmail />
                        <h4>Email</h4>
                        <h5>longbhuynh019@gmail.com</h5>
                        <a href = "mailto:longbhuynh019@gmail.com" target = "_blank">Send a message</a>
                    </article>

                    <article className = "contact__option">
                        <FaFacebookMessenger />
                        <h4>Messenger</h4>
                        <h5>Bao Long</h5>
                        <a href = "https://m.me/huynhl91" target = "_blank">Send a message</a>
                    </article>

                    <article className = "contact__option">
                        <IoLogoWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+1 (617) 283-6031</h5>
                        <a href = "https://api.whatsapp.com/send?phone=16172836031" target = "_blank">Send a message</a>
                    </article>


                </div>
                <form action = ""></form>
            </div>
        </section>
    )
}

export default Contact
