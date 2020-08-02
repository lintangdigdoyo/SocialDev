import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardAction from './DashboardAction';
import DashboardDetailProfile from './DashboardDetailProfile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const renderWelcome = () => {
    return (
      <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' />
          Welcome {user && user.name}{' '}
        </p>
      </Fragment>
    );
  };
  const renderProfile = () => {
    return profile ? (
      <Fragment>
        <DashboardAction />
        <DashboardDetailProfile
          title='Experience Credentials'
          heading='Company'
          item1='Title'
          item2='Years'
          detailProfile={profile.experience}
        />
        <DashboardDetailProfile
          title='Education Credentials'
          heading='School'
          item1='Degree'
          item2='Years'
          detailProfile={profile.education}
        />
        <div className='my-2'>
          <button className='btn btn-danger' onClick={() => deleteAccount()}>
            <i className='fas fa-user-minus' /> Delete My Account
          </button>
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <p>You have not yet setup a profile, please add some info</p>
        <Link to='/create-profile' className='btn btn-primary my1'>
          Create Profile
        </Link>
      </Fragment>
    );
  };

  return loading ? (
    <Spinner />
  ) : (
    <div>
      {renderWelcome()}
      {renderProfile()}
    </div>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
