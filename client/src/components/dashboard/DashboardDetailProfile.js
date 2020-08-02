import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { deleteExperience } from '../../actions/profile';

const DashboardDetailProfile = ({
  title,
  heading,
  item1,
  item2,
  detailProfile,
  deleteEducation,
  deleteExperience,
}) => {
  const details = detailProfile.map((detail) => (
    <tr key={detail._id}>
      <td>{detail.company ? detail.company : detail.school}</td>
      <td className='hide-sm'>{detail.title ? detail.title : detail.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{moment.utc(detail.from)}</Moment> - {''}
        {detail.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(detail.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() =>
            detail.company
              ? deleteExperience(detail._id)
              : deleteEducation(detail._id)
          }
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>{title}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>{heading}</th>
            <th className='hide-sm'>{item1}</th>
            <th className='hide-sm'>{item2}</th>
            <th />
          </tr>
        </thead>
        <tbody>{details}</tbody>
      </table>
    </Fragment>
  );
};

DashboardDetailProfile.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  detailProfile: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation, deleteExperience })(
  DashboardDetailProfile
);
