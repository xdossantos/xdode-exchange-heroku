import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

// Here are the imported icons from FontAwesome

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons';

// Here are the imported styles

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
    </Fragment>

    <div className="register">
      <div className="login-bg"/>
      <div className="login-content">
        <div className="login-box">
          <div className="login-header">
            <h3>Sign up
            </h3>
          </div>
          <div className="login-body">

            {/*
            <form>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" id="exampleFirstName" placeholder="Firstname " />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleLastName" placeholder="Lastname" />
            </div>
            <div className="custom-control custom-checkbox form-group">
                <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                <label className="custom-control-label" htmlFor="exampleCheck1">
                I agree to <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Terms &amp; Conditions</a>
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            </form> */}

            
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>

          </div>

          <div className="login-footer">
            <p className="m-t-sm"><br/><br/>Go back to
              <a href="/"> the homepage. </a><br/>
              <a href="/uservoice">User Voice form.</a>
            </p>

            <p>Copyright
              <a href="http://https://xdode.com/"> XDODE </a>
              (PTY) LTD
            </p>
          </div>
        </div>
      </div>

    </div>


    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
