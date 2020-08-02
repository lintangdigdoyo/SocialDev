import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: { user, skills, bio } }) => {
  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{user.name.split(' ')[0]}'s Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}

      <div className='line'></div>
      <h2 className='text-primary'>Skill Set</h2>

      <div className='skills'>
        {skills.map((skill, index) => (
          <div className='p-1' key={index}>
            <i className='fa fa-check'></i> {skill.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
