import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <header>
      <img
        className="logo"
        src="http://kisallioppiminen.fi/img/kisalli-logo.png"
        width="300px"
        alt="Kisallioppiminen.fi Logo"
      />

      <div className="content">
        <span>kisallioppiminen.fi / </span>
        <span className="location">Etusivu</span>
      </div>
    </header>
  )
}
