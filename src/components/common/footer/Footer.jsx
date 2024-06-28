import React from 'react';
import { blog } from '../../../dummydata';
import './footer.css';

const Footer = () => {
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
            <img src='./images/srg-logo.png' alt='SRG Logo' />
            <h3>कंप्यूटर के साथ सपनो की उड़ान</h3>
            <p>
              Your gateway to Master your skill from Basic to Advance. Elevate
              skills, enhance employability, stay ahead in tech! 🚀
            </p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Menu</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          {/* <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'> </i>
                147, Ground floor, Saree Mahal wali Gali, Mangal Bazar,
                Behrampur Road, Ghaziabad, Uttar Pradesh 201009
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <ul> +91 9891396090</ul>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                join.srg@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All Rights Reserved | Design{' '}
          <i className='fa fa-heart'></i> by techcroon.in
        </p>
      </div>
    </>
  );
};

export default Footer;
