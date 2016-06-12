import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class HomePage extends React.Component {
  render() {
    const style = {
      margin: 12,
    };

    return (
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Kasih.in</h1>
          <h4 className="center-align">Helping people is easy.</h4>
          <RaisedButton 
            label="About"
            primary
            containerElement={<Link to="about" />}
            linkButton
            style={style} />
          <RaisedButton 
            label="Try now"
            secondary
            containerElement={<Link to="help" />}
            linkButton
            style={style} />
        </div>
      </div>
    );
  }
}

export default HomePage;
