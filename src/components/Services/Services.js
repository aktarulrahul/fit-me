import React from 'react';
import useCourse from '../../hooks/useCourse';
import Banner from '../Banner/Banner';
import CourseCard from '../CourseCard/CourseCard';
import services from '../../img/services.svg';

const Services = () => {
  const [courses] = useCourse();
  return (
    <div className="container my-4">
      <Banner title="Courses" img={services} />
      <h1 className="text-center">Our All Courses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Services;
