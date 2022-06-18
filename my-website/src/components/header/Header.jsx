import React from 'react'
import './header.css'
import CTA from './CTA'
import M4 from '../../assets/M4.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
      
        <header>
            
            
            <div className = "container header__container">
                
                <h5>Hello, I am</h5>
                <h1>Long <span style={{ color: "var(--color-primary)" }}>Huynh</span></h1>
                <h5 className = "text-light">Software Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src = {M4} alt = "me"/>
                </div>

                <a href = "#contact" className = 'scroll__down'>Scroll Down</a>
            </div>

        </header>
        
    )
}

export default Header
