import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const handleLinkClick = (e) => {
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay tune and get the latest update</h1>
            <span>
              Join SRG - Computer Training Institute for a tech career boost
            </span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter your email-Id here' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <img src='/images/srg-computer-logo.png' alt='SRG Logo' />
            <h3>कंप्यूटर के साथ सपनो की उड़ान</h3>
            <p>
              Your gateway to Master your skill from Basic to Advance. Elevate
              skills, enhance employability, stay ahead in tech! 🚀
            </p>
            <div className='social-icons'>
              <a
                href='https://www.facebook.com/SRGCTI/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://www.instagram.com/srg_computer/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'>
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='https://www.youtube.com/@SRGCTI/'
                target='_blank'
                rel='noopener noreferrer'
                className='social-icon'>
                <i className='fab fa-youtube'></i>
              </a>
            </div>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to='/about' onClick={handleLinkClick}>About Us</Link>
              </li>
              <li>
                <Link to='/courses' onClick={handleLinkClick}>Courses</Link>
              </li>
              <li>
                <Link to='/courses' onClick={handleLinkClick}>Services</Link>
              </li>
              <li>
                <Link to='/journal' onClick={handleLinkClick}>Blog</Link>
              </li>
              <li>
                <Link to='/contact' onClick={handleLinkClick}>Contact us</Link>
              </li>
              <li>
                <Link to='/privacy-policy' onClick={handleLinkClick}>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/scholarship-policy#policy-title' onClick={handleLinkClick}>Scholarship Policy</Link>
              </li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map-marker-alt'></i>
                <span>
                  147, Ground floor, Saree Mahal wali Gali, Mangal Bazar,
                  Ghaziabad, Uttar Pradesh 201009
                </span>
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <a href='tel:+919891396090'>+91 9891396090</a>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <a href='mailto:join.srg@gmail.com'>join.srg@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2026 All Rights Reserved | Design{' '}
          <i className='fa fa-heart'></i> by techcroon.in
        </p>
      </div>
    </>
  );
};

export default Footer;
