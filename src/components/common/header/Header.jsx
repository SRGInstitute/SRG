import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul
            className={click ? 'mobile-nav' : 'flexSB '}
            onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/team'>Instructors</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
              <a
                href='https://students.srgeducation.in/'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'>
                SRGian
              </a>
            </li>
            <li>
              <a
                href='https://srgeducation.netlify.app/'
                rel='noopener noreferrer'>
                Certificate
              </a>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <a className='head' href='tel:+919891396090'>
              +91 98913 96090
            </a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? (
              <i className='fa fa-times'> </i>
            ) : (
              <i className='fa fa-bars'></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
