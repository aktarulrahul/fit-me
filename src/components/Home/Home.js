import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import useCourse from '../../hooks/useCourse';
import Banner from '../Banner/Banner';

import home from '../../img/about.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Benefits from '../Benefits/Benefits';

const Home = () => {
  const [courses] = useCourse();
  const slicedCourse = courses.slice(0, 4);

  return (
    <div>
      <Header />
      <div className="Home container">
        <Banner title="Discover Calmness with Yoga" img={home} link="about" />
        <Benefits />
        <h1 className="text-center fitme-color my-5">
          Our Programms & Services
        </h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {slicedCourse.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
