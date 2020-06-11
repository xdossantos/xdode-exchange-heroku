import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Here are the imported icons from FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {} from '@fortawesome/free-solid-svg-icons';

// Here are the imported styles

// import 'bootstrap/dist/css/bootstrap.min.css';

import ClosingDeal from "./ClosingDeal.svg";
import ProfilePic from "./img/ProfilePic.svg";
import GrowthExpert from "./img/GrowthExpert.svg";
import NegotiateProcessPic from "./img/NegotiateProcessPic.svg";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (


<main className="container">
{/* A jumbotron begins here */}
<div className="jumbotron">
  <h1 className="display-4">Sign Up to Find Technology Tenders
  </h1>
  <p className="lead">To kickstart your growth strategy simply register onto the
    platform and start closing deals with South African Technology Companies</p>
    <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
  <br/>
  <hr className="my-4"/>

</div>
{/* The jumbotron ends here */}
{/* Take note that these discounts can be applied using a text input on the checkout page */}
{/* Entrepreneur Deal making process   */}

<div className="row">
  <div className="media col-md-6 text-center">
    <img src={ProfilePic} className="entrepProcess imgCentre" alt="TARGET"/> {/* The image has been made responsive using the .img-fluid class in order to make the image scales based on the size of its parent div  */}
  </div>
  <div className="col-md-6 text-center">
    <div className="entrepProcess">
      <h2>1. Create Your xChange Profile
      </h2>
      <p className="lead">We will verify your business and guide you through the
        process of finding deals on our platform. When your profile is complete it will
        be shown to companies looking for your services
      </p>
    </div>
  </div>
</div>
<div className="row">
        <div className="col-md-6 text-center">
          <div className="entrepProcess">
            <h2>2. Meet your Growth Expert
            </h2>
            <p className="lead">If your business is successfully verified, you will be
              assigned a procurement expert who will help you find opportunities in the
              private and public sector</p>
            <br/>
          </div>
        </div>
        <div className="media col-md-6 text-center">
          <img src={GrowthExpert} className="entrepProcess imgCentre" alt="TARGET"/> {/* The image has been made responsive using the .img-fluid class in order to make the image scales based on the size of its parent div  */}
        </div>
      </div>
      <div className="row">
        <div className="media col-md-6 text-center">
          <img
            src={NegotiateProcessPic}
            alt="Closing Deal"
            className="entrepProcess imgCentre"/> {/* The image has been made responsive using the .img-fluid class in order to make the image scales based on the size of its parent div  */}
        </div>
        <div className="col-md-6 text-center">
          <div className="entrepProcess">
            <h2>3. Bid for Proposals</h2>
            <p className="lead">The xChange Platform will intelligently match you to
              companies looking for your products and services. Select a deal to close and
              make an offer
            </p>
            <br/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="entrepProcess">
            <h2>4. Companies Accept or Reject your Offer
            </h2>
            <p className="lead">After a few weeks of negotiation if a company accepts your
              offer, we can begin the project: Set goals, milestones and other payment terms.
            </p>
            <br/>
          </div>
        </div>
        <div className="media col-md-6 text-center">
          <img src={ClosingDeal} className="entrepProcess imgCentre" alt="TARGET"/> {/* The image has been made responsive using the .img-fluid class in order to make the image scales based on the size of its parent div  */}
        </div>
      </div>





</main>

  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
