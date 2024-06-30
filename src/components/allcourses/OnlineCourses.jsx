import React from 'react';
import { useHistory } from 'react-router-dom';
import './courses.css';
import { online } from '../../dummydata';
import Heading from '../common/heading/Heading';

const OnlineCourses = () => {
  const history = useHistory();

  const handleCourseClick = (index) => {
    history.push(`/course/${index}`);
  };

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Our Best Courses' />
          <div className='content grid3'>
            {online.map((val, index) => (
              <div key={index} className='box' onClick={() => handleCourseClick(val.id)}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
