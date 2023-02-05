/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">AKU</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portofolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.con"><AiOutlineInstagram/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer