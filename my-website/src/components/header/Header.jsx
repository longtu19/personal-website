import React from 'react'
import './header.css'
import CTA from './CTA'
import Me2 from '../../assets/Me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
      
        <header>
            <div className = "container header__container">
                <h5>Hello, I am</h5>
                <h1>Long Huynh</h1>
                <h5 className = "text-light">Software Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src = {Me2} alt = "me"/>
                </div>

                <a href = "#contact" className = 'scroll__down'>Scroll Down</a>
            </div>

        </header>
        
    )
}

export default Header
