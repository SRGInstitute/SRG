import React from 'react';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <li>
              <a href='https://srgeducation.in'>
                <img src='./images/srg-logo.png' alt='SRG Logo' />
              </a>
            </li>
            <h3>कंप्यूटर के साथ सपनो की उड़ान</h3>
          </div>

          <div className='social'>
            <a
              href='https://www.facebook.com/SRGCTI/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a
              href='https://www.instagram.com/srg_computer_institute/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-instagram icon'></i>
            </a>
            <a
              href='https://www.youtube.com/@SRGCTI/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-youtube icon'></i>
            </a>
            <a
              href='https://x.com/SRGCTI/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-twitter icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
