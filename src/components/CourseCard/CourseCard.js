import React from 'react';

import './CourseCard.css';
import Rating from 'react-rating';

const CourseCard = (props) => {
  const { title, price, img, level, duration, rating, reviwer } = props.course;
  return (
    <div className="row m-2 py-2 border rounded shadow course-card">
      <div className="col-8">
        <img className="img-fluid rounded h-100" src={img} alt="" />
      </div>
      <div className="col-4 my-auto">
        <h3>{title}</h3>
        <hr />
        <Rating
          readonly
          initialRating={rating}
          emptySymbol="far fa-star fitme-color"
          fullSymbol="fas fa-star fitme-color"
        />
        (<i className="fas fa-user fitme-color"> </i> {reviwer})
        <br />
        <div className="row my-4">
          <div className="col-4 fw-bold">${price}</div>
          <div className="col-8">
            <i class="far fa-clock fitme-color"></i> {duration} mins
          </div>
        </div>
        <button className="btn fitme-bg text-white text-uppercase">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
