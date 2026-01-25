import React from 'react';
import Back from '../common/back/Back';
import './scholarship-closed.css';

const ScholarshipClosed = () => {
  return (
    <>
      <Back title='Scholarship Update' />
      <section className='scholarship-closed'>
        <div className='container'>
          <div className='closed-card'>
            <h2>Scholarship Completion Done</h2>
            <p>
              Scholarship applications for this year are closed. Please contact
              SRG Center for further details.
            </p>
            <div className='closed-actions'>
              <a className='primary-btn' href='tel:+919891396090'>
                Call SRG Center
              </a>
              <a
                className='secondary-btn'
                href='https://wa.me/919891396090'
                target='_blank'
                rel='noopener noreferrer'
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipClosed;
