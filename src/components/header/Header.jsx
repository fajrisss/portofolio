import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assetes/me.png'

const Header = () => {
  return (
  <header>
    <div className="container header__container" id='header'>
      <h5>Hello i'am</h5>
      <h1>M.Fajjris Shoba</h1>
      <h5 className="text-light">React.JS Developer</h5>
      <CTA/>
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">scroll down</a>
    </div>
  </header>
  )
}

export default Header