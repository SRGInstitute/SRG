import React from 'react';
import { useLocation } from 'react-router-dom';

const BackPlain = ({ title }) => {
  const location = useLocation();
  return (
    <>
      <section className='backPlain'>
        <h2>Home / {location.pathname.split('/')[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='marginPlain'></div>
    </>
  );
};

export default BackPlain;
