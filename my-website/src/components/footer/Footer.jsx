import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer >
            <a href = "#" className = "footer__logo">LONG</a>

            <ul className = "permalinks">
                <li> <a href = "#">Home</a></li>
                <li> <a href = "#about">About</a></li>
                <li> <a href = "#skills">Skills</a></li>
                <li> <a href = "#experience">Experience</a></li>
                <li> <a href = "#awards">Awards</a></li>
                <li> <a href = "#contact">Contact</a></li>
            </ul>

            <div className = "footer__socials">
                <a href = "https://linkedin.com"><AiFillLinkedin/></a>
                <a href = "https://facebook.com"><BsFacebook /></a>
                <a href = "https://instagram.com"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2022 by Long Huynh. All rights reserved.</small>
            </div>
        </footer>

        
    )
}

export default Footer
