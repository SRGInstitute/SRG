import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../common/heading/Heading';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleScholarshipClick = (e) => {
    e.preventDefault();
    navigate('/scholarship');
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO' title='SRG COMPUTER INSTITUTE' />
            <p>
              Your gateway to Master your skill from Basic to Advance. Elevate
              your skills, enhance employability, stay ahead in tech! 🚀
            </p>
            <div className='button'>
              <button className='primary-btn'>
                ADMISSION NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
            <div 
              className='scholarship-banner-link' 
              onClick={handleScholarshipClick}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/scholarship');
                }
              }}
            >
              <div className='scholarship-banner'>
                <div className='banner-content'>
                  <div className='banner-left'>
                    <div className='banner-icon'>
                      <i className='fa fa-graduation-cap'></i>
                    </div>
                    <div className='banner-text'>
                      <h3>Scholarship Program Available!</h3>
                      <p>Apply now for financial assistance and make your education dreams come true</p>
                    </div>
                  </div>
                  <div className='banner-right'>
                    <span className='scholarship-btn'>
                      Apply for Scholarship <i className='fa fa-arrow-right'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='hero-spacer'></div>
    </>
  );
};

export default Hero;
