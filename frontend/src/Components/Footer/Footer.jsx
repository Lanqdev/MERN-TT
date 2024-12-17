import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo.png'
import facebook_icon from '../Assets/Frontend_Assets/facebook.png'
import twitter_icon from '../Assets/Frontend_Assets/twitter.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={twitter_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 Shopper. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

