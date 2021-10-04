import React from 'react';

const MemberCard = (props) => {
  const { name, role, experience, img } = props.member;
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img src={img} className="card-img-top h-75" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>Role</td>
                <td>{role}</td>
              </tr>
              <tr>
                <td>Experiences</td>
                <td>{experience}+</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center fitme-color fs-3">
            <i className="fab fa-facebook me-2"></i>
            <i className="fab fa-instagram-square me-2"></i>
            <i className="fab fa-youtube me-2"></i>
            <i className="fab fa-pinterest me-2"></i>
            <i className="fab fa-twitter-square me-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
