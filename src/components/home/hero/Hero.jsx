import React from 'react';
import Heading from '../../common/heading/Heading';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading
              subtitle='WELCOME TO SRG'
              title='Best Computer Institute'
            />
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
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
