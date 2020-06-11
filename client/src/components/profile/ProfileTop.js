import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: {
      name,
      avatar
    }
  }
}) => {
  return ( <> 
  <main className="container">
      <div className="profile-cover">
        <img src="../../assets/images/profile-bg.jpeg"/>
      </div>
      <div className="profile-header">
        <div className="profile-img">
          <img src={avatar}/>
        </div>
        <div className="profile-name">
          <h3>{name}</h3>
        </div>
        <div className="profile-header-menu">
          {status}
          {company && <span>
            at {company}</span>}

        </div>
      </div>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x'/>
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x'/>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'/>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x'/>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'/>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'/>
          </a>
        )}
      </div>
    </main>

    {/* TODO: Fix this styling  here so that the ProfileTop renders correctly. Data pulls through in the meantime but we need a more permanent fix */
  } < main className = "container" > <div className="">
    <div id="">
      <div className="row"></div>

    </div>{/* Main Wrapper */}

  </div> </main>



    </ >);
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
