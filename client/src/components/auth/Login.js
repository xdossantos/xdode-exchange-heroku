import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    // TODO: How would we implement the Google Authentication process? 
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
    <div className="page-container">
      <div className="login">
        <div className="login-bg"/>
        <div className="login-content">
          <div className="login-box">
            <div className="login-header">
              <h3>Log In</h3>
              <p>Welcome back! Please login to continue.</p>
            </div>
            <div>
              {/* TODO: Implement Google and Facebook 0Auth  */}
              <button type="button" class="btn btn-secondary btn-lg" disabled>Facebook Login</button>
              <button type="button" class="btn btn-secondary btn-lg" disabled>Google Login</button>
            </div>
            <div className="login-body">
              <form className="form" onSubmit={onSubmit} >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    aria-describedby="emailHelp"
                    placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    minLength="6"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
       
              </form>
              {/* TODO: Remember to enable the link below this  our helpcentre is up and running  */}
              {/* <p className="m-t-sm">
                <a href="/helpcentre">Forgot password?</a><br/>
              </p> */}
              
              <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
            </div>
            <div className="login-footer">
              <p>2020 © xChange Marketplace, a product of XDODE (PTY) LTD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
