import React from 'react';
import AboutCard from '../about/AboutCard';
// import Hblog from './Hblog';
// import HAbout from './HAbout';
import Hero from './hero/Hero';
// import Hprice from './Hprice';
import Testimonal from './testimonal/Testimonal';
import OnlineCourses from '../allcourses/OnlineCourses';
import TopPerformers from './topPerformers/TopPerformers';
import '../allcourses/courses.css';

const Home = () => {
  return (
    <>
      <Hero />
      <TopPerformers />
      <AboutCard />
      <OnlineCourses />
      {/* <HAbout /> */}
      <Testimonal />
      {/* <Hblog /> */}
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
