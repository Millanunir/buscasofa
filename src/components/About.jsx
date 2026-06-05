import React from 'react'
import './About.css'
import { TEAM_NUMBER } from '../data/team'

const About = () => {
    
    return (
    <div className="about-container">
        <h1>Acerca de nosotros</h1>
        <div id="info">
            Somos el equipo nº {TEAM_NUMBER}
        </div>
    </div>

    )
}

export default About