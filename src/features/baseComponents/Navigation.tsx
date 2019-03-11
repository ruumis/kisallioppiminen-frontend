import React from 'react'
import Link from './Link'
import userService from '../../services/userService';

export function Navigation() {
  const url = process.env.NODE_ENV === 'PRODUCTION' ? 'http://localhost:8000/users/auth' : 'http://localhost:8000/users/auth'
  let user

  return (
    <nav className="navigator">
      <ul>
        <li className="navigator-item">
          <Link className="navigator-link" href="/courseAdmin">
            Kurssihallinta
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
        {user ? (
          <li className="navigator-item">
            <a className="navigator-link" href={url}>
              Kirjauduttu
            </a>
          </li>
        ) : (
          <li className="navigator-item">
            <a className="navigator-link" href={url} onClick={setUser()}>
              Kirjautuminen
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

const setUser = () => {
  return () => {
    const foo = userService.login()
    console.log(foo)
    return undefined
  }
}

export default Navigation
