import React from 'react'
import './About.css'
import { TEAM_NUMBER, TEAM_MEMBERS } from '../data/team'

const About = () => {
    return (
        <div className="about-container">
            <h1>Acerca de nosotros</h1>
            <div id="info">
                Somos el equipo nº {TEAM_NUMBER}
            </div>
            <section className="about-team">
                <h2>Miembros del equipo</h2>
                <ul className="team-members">
                    {TEAM_MEMBERS.map((member) => (
                        <li key={member.name} className="team-member">
                            <span className="team-member-name">{member.name}</span>
                            <span className="team-member-contribution">{member.contribution}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default About
