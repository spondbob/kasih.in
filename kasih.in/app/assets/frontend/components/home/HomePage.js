import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Kasih.in</h1>
          <h4 className="center-align">Helping people is easy .</h4>
          <div className="col s6 right-align">
            <Link className="center-align btn btn-primary btn-large" to="about">Learn more</Link>
          </div>
          <div className="col s6 left-align">
            <Link className="center-align btn btn-primary btn-large" to="help">Try now</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
