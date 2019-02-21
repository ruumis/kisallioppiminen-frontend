import React from 'react'
import Link from './Link'

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
          <Link className="navigator-link" href="/courseAdmin">
            Kurssihallinta
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" href="/omat">
            Omat kurssit
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" href="/">
            Materiaalit
          </Link>
        </li>
        <li className="navigator-item">
          <a className="navigator-link" href="https://blogs.helsinki.fi/kisallioppiminenlukiossa/">
            Blogi
          </a>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" href="/tietoa">
            Tietoa
          </Link>
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
