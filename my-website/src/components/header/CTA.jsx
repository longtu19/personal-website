import React from 'react'
import Long_Huynh_resume from '../../assets/Long_Huynh_resume.pdf'

const CTA = () => {
    return (
        <div className = 'cta'>
            <a href = {Long_Huynh_resume} download className = 'btn'>Download Resume</a>
            <a href = "#contact" className = 'btn btn-primary'>Let's Talk</a>

            
        </div>
    )
}

export default CTA
