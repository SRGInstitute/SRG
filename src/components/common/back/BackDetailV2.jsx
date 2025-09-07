import React from 'react';
import { useLocation } from 'react-router-dom';

const BackDetailV2 = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className='backV2'>
        <h2>Home / {location.pathname.split('/')[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='marginV2'></div>
    </>
  );
};

export default BackDetailV2;
