import React from 'react'

export function Navigation() {
  return (
    <nav className="navigator">
      <ul>
      <li className="navigator-item">
          <a className="navigator-link" href="/courseAdmin">
            Kurssihallinta
          </a>
        </li>
        <li className="navigator-item">
          <a className="navigator-link" href="/">
            Materiaalit
          </a>
        </li>
        <li className="navigator-item">
          <a className="navigator-link" href="https://blogs.helsinki.fi/kisallioppiminenlukiossa/">
            Blogi
          </a>
        </li>
        <li className="navigator-item">
          <a className="navigator-link" href="/tietoa">
            Tietoa
          </a>
        </li>
        <li className="navigator-item">
          <a className="navigator-link" href="#">
            Kirjautuminen
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
