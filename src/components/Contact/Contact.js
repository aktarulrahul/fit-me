import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import contactUs from '../../img/contactUs.svg';
import { Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <Banner
          title="Contact US"
          img={contactUs}
          description="Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you."
          link="home"
        />
        <div>
          <Form>
            {/* only form structure are added. no functionality implemented yet */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="David" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Type Your Query Here</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className="btn text-white fitme-bg">Send</button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
