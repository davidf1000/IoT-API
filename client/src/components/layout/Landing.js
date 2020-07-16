import React from 'react';
import { Link , Redirect } from 'react-router-dom';

export const Landing = () => {

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">IoT API</h1>
          <p className="lead">
            API for sensors to send data to Cloud. Created using MERN Stacks. Plot and capture your data with ease.
          </p>
          <div className="buttons">
            <Link to="/getstarted" className="btn btn-primary">
              <b>Let's Get Started</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
