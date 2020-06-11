import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <>


    <div className="row">
      <div className="col-xl-12">
        <div className="profile-cover">
          <img src="../../assets/images/profile-bg.jpeg" />
        </div>
        <div className="profile-header">
          <div className="profile-img">
            <img src={avatar}  />
          </div>
          <div className="profile-name">
          <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
          </div>
          <div className="profile-header-menu">
              <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
     
          </div>
          <div>
          <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
          </div>
        </div>
      </div>
    </div>




    </>

    
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
