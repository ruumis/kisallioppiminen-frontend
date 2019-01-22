import React from 'react'
import './Navigation.scss'

export function Navigation() {
  return (
    <nav className="navigator">
      <ul>
        <li className="nav-item">
          <a href="#">Materiaalit</a>
        </li>
        <li className="nav-item">
          <a href="#">Blogi</a>
        </li>
        <li className="nav-item">
          <a href="#">Tietoa</a>
        </li>
        <li className="nav-item">
          <a href="#">Kirjautuminen</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
