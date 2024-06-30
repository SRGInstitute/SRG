import React from 'react';
import Back from '../common/back/Back';
import './contact.css';

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.711400027623!2d77.40459199331089!3d28.63408660265524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefabaad8398b%3A0x2cc82c0e497c2de2!2sSRG%20-%20Computer%20Training%20Institute%20%7C%20Basic%20Computer%2C%20Advance%20Excel%20%7C%20Tally%20%7C%20Web%20Designing%20%7C%20App%20Develop%20%7C%20Graphics%20Design!5e0!3m2!1sen!2sin!4v1719606877922!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title = "map" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>147, Behrampur Road, Ghaziabad, UP</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> join.srg@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>
                  <li>+91-9891396090</li>
                </p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
