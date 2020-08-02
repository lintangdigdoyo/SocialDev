import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileEducation = ({
  education: { school, from, to, degree, description },
}) => (
  <Fragment>
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {to ? <Moment format='YYYY/MM/DD'>{to}</Moment> : <span>Now</span>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
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

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
