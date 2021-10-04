import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import banner from '../../img/banner.svg';
import aboutTeam from '../../img/aboutTeam.jpg';
import MemberCard from '../MemberCard/MemberCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('./teamMembers.json')
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <Header />
      <div className="container my-4">
        <Banner title="About" img={banner} link="contact" />
        <div className="row my-4">
          <div className="col-6 my-auto">
            <img className="w-100 img-fluid rounded" src={aboutTeam} alt="" />
          </div>
          <div className="col-6">
            <h3 className="fitme-color fw-bold">ABOUT MEMBERS</h3>
            <hr />
            <p>
              Fit Me is a down to earth yoga studio. You do not have to be a
              "yogi" (or even know what that word means) to practice at our
              studio. We welcome anyone who is ready to relax, work hard, laugh
              or let go. We believe that yoga is for everyone regardless of age
              and body type. Whether you can touch your toes or not, Studio One
              Yoga opens our doors and our hearts to helping you challenge your
              physical body and mind.
            </p>
            <p>
              Our mission is to provide a genuine and sustainable yoga practice
              that will continue to evolve the physical and emotional health of
              our students. At S1 we strive to provide a safe inviting
              environment where students can develop a regular and realistic
              yoga practice. We are proud of the individual attention that our
              students receive. Our instructors are passionate about teaching
              and are always willing to take that extra step to ensure that no
              student feels left behind.
            </p>
          </div>
        </div>
        <h3 className="text-center fs-2 fw-bold fitme-color mb-4">
          Our Team Members
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
