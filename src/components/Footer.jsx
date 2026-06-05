import React from 'react'
import { TEAM_MEMBERS } from '../data/team'

const Footer = () => {
  return (
    <div>
        <h2>Miembros del equipo:</h2>
        <ul>
            {TEAM_MEMBERS.map((member) => (
              <li key={member.name}>{member.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Footer