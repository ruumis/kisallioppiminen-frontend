import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div style={{ width: '33%' }}>
          Kisallioppiminen.fi tarjoaa ilmaisia ja avoimia materiaaleja
          matematiikan oppimisen ja opettamisen tueksi.
          <br />
          Materiaalit ovat erityisesti suunniteltu tukemaan tehostetun
          kisällioppimisen menetelmän käyttöä.
        </div>
        <div style={{ width: '33%' }}>
          {/* <img
            className="facebook-icon"
            src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
            alt="fb-icon"
          /> */}
          <a href="https://www.facebook.com/groups/899303056853769/">
            Facebook-ryhmä
          </a>
        </div>
        <div style={{ width: '33%' }}>
          <p>
            <img src="/img/copyright.png" alt="Creative Commons copyright" />
            Sivuston materiaali on lisensoitu Creative Commons
            BY-NC-SA-lisenssillä ellei muuta mainita.
          </p>
          <p>
            Sivuston lähdekoodi löytyy
            <a href="https://github.com/kisallioppiminen">GitHubista</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}
