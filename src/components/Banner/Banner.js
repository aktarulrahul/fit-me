import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  const { title, img, description, link } = props;
  return (
    <div className="fitme-header mt-4">
      <div className="row fitme-banner">
        <div className="col-md-6 my-auto mx-auto">
          <h1 className="fs-1 fw-bold lh-lg fitme-color">{title}</h1>
          <p>
            {/* Implement this banner description in a way that if we didn't set the description manually, it will take it's default title */}
            {description ? (
              description
            ) : (
              <span>
                Yoga is the journey of the self, through the self, to the self.
                <br />
                You cannot always control what goes on outside. But you can
                always control what goes on inside.
              </span>
            )}
          </p>
          <Link to={`/${link}`}>
            <button className="btn fitme-bg fs-5 text-white text-capitalize">
              {link}
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
