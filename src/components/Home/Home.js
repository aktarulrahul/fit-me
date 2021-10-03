import React from 'react';
import './Home.css';
import CourseCard from '../CourseCard/CourseCard';
import useCourse from '../../hooks/useCourse';
import Banner from '../Banner/Banner';

const Home = () => {
  const [courses] = useCourse();
  const slicedCourse = courses.slice(0, 4);

  return (
    <div className="Home container">
      <Banner />
      <h1 className="text-center fitme-color my-4">Our Services</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {slicedCourse.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;
