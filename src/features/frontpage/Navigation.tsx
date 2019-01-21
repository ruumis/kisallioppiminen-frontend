import React from 'react'
import { InitialState } from '../../types/InitialState'
import './style.css'

export function Navigation(initialState: InitialState) {
  return (
    <nav className="navigator">
      <ul>
        <li>
          <a href="#">Materiaalit</a>
        </li>
        <li>
          <a href="#">Blogi</a>
        </li>
        <li>
          <a href="#">Tietoa</a>
        </li>
        <li>
          <a href="#">Kirjautuminen</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
