import React from 'react';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src='./images/srg-logo.png' alt='SRG Logo' />
            <h3>कंप्यूटर के साथ सपनो की उड़ान</h3>
          </div>

          <div className='social'>
            <Link to={{ pathname: "https://www.facebook.com/SRGComputerInstitute" }} target="_blank"><i className='fab fa-facebook-f icon'></i></Link>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
