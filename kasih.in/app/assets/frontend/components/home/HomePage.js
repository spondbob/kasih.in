import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
        <h1>Kasih.in</h1>
        <p>Helping people is easy.</p>
        <div className="wrapper">
            <Link to="about" align="center" className="btn btn-primary btn-large">Learn more</Link>
            <Link to="help" align="center"  className="btn btn-primary btn-large">Try now</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
