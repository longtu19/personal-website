import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {MdWorkspaces} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {GoProject} from 'react-icons/go'
import {useState} from 'react'

const nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href = "#" onClick = {() => setActiveNav('#')} className = {activeNav === '#' ? 'active': ''}><ImHome color = "#1B9FA8"/></a>
            <a href = "#about" onClick = {() => setActiveNav('#about')}  className = {activeNav === '#about' ? 'active' : ''}><FaUser/></a>
            <a href = "#skills" onClick = {() => setActiveNav('#skills')}  className = {activeNav === '#skills' ? 'active' : ''}><MdWorkspaces/></a>
            <a href = "#experience" onClick = {() => setActiveNav('#experience')}  className = {activeNav === '#experience' ? 'active' : ''}><RiServiceFill/></a>
            <a href = "#portfolio" onClick = {() => setActiveNav('#portfolio')}  className = {activeNav === '#portfolio' ? 'active' : ''}><GoProject/></a>
            <a href = "#contact" onClick = {() => setActiveNav('#contact')}  className = {activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
        </nav>
    )
}

export default nav
