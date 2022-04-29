import React from 'react'
import Skills from './components/skills/Skills'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <div>
            <>
            <Header/>
            <Nav/>
            <About />
            <Skills/>
            <Experience />
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>


            
            
            </>
        </div>
    )
}

export default App
