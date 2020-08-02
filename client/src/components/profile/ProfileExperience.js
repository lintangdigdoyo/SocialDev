import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExperience = ({
  experience: { company, from, to, title, description },
}) => (
  <Fragment>
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {to ? <Moment format='YYYY/MM/DD'>{to}</Moment> : <span>Now</span>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        {description && (
          <Fragment>
            <strong>Description: </strong>
            {description}
          </Fragment>
        )}
      </p>
    </div>
  </Fragment>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
