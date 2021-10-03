import React from 'react';
import useCourse from '../../hooks/useCourse';
import CourseCard from '../CourseCard/CourseCard';

const Services = () => {
  const [courses] = useCourse();
  return (
    <div className="container my-4">
      <h1 className="text-center">Our All Courses</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Services;
