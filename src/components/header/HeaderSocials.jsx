import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
// import {BsTwitter} from 'react-icons/bs'
// import {BsFacebook} from 'react-icons/bs'
// import {FiFigma} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com" target='_blank' rel="noreferrer"><BsGithub/></a>
      <a href="https://instagram.com" target='_blank' rel="noreferrer"><FaInstagramSquare/></a>
      {/* <a href="https://twitter.com" target='_blank' rel="noreferrer"><BsTwitter/></a>
      <a href="https://facebook.com" target='_blank' rel="noreferrer"><BsFacebook/></a>
      <a href="https://figma.com" target='_blank' rel="noreferrer"><FiFigma/></a> */}
    </div>
  )
}

export default HeaderSocials