import React from 'react';
import notFound from '../../img/404.svg';

const NotFound = () => {
  return (
    <div className="container">
      <img className="img-fluid" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
