import React from 'react'

export function NavBottom() {
  return (
    <div className="navigatorBottom">
      <label htmlFor="tehtavat" className="navigatorBottom-item">
        Tehtävät
      </label>
      <input type="checkbox" id="tehtavat" />
      <label htmlFor="teoria" className="navigatorBottom-item">
        Teoria
      </label>
      <input type="checkbox" id="teoria" />
      <label htmlFor="avaakaikki" className="navigatorBottom-item">
        Avaa kaikki
      </label>
      <input type="checkbox" id="avaakaikki" />
    </div>
  )
}

export default NavBottom
