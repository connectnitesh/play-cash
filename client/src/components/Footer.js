import React from 'react'

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <span className="footer-link-separator">|</span>
        <a href="/terms">Terms and Conditions</a>
        <span className="footer-link-separator">|</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <hr className="footer-hr" />
      <div className="footer-copyright">
        &copy; 2022 BidTronix | Patent Pending Technology
      </div>
    </footer>
  )
}

export default Footer