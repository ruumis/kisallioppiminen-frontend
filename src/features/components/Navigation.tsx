import React from 'react'

export function Navigation() {
  return (
    <nav className="navigator">
      <ul>
        <li className="navigator-item">
          <a href="#">Materiaalit</a>
        </li>
        <li className="navigator-item">
          <a href="https://blogs.helsinki.fi/kisallioppiminenlukiossa/">Blogi</a>
        </li>
        <li className="navigator-item">
          <a href="#">Tietoa</a>
        </li>
        <li className="navigator-item">
          <a href="#">Kirjautuminen</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
