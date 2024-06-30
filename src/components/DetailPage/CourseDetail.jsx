
import React from 'react';
import { useParams } from 'react-router-dom';
import { online } from '../../dummydata';
import SingleDetailItemCard from './SingleDetailItemCard';
import BackDetailV2 from "../common/back/BackDetailV2"

const CourseDetail = () => {
  const { id } = useParams();
  const course = online.find(course => course.id === parseInt(id));

  console.log('id:', id); // Add this console log to check the course data

  console.log('Course:', course); // Add this console log to check the course data


  return (
   

<>
<BackDetailV2 title={course.description.title} />
<div>
      <SingleDetailItemCard item={course} />
    </div>
    </>
  );
};

export default CourseDetail;
