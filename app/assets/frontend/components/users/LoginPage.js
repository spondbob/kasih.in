import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import LoginPageForm from './presentation/LoginPage.js';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <LoginPageForm ref="loginForm" onSubmit={onSubmit} />
        <div>
          <RaisedButton
            type="submit"
            primary
            label="Login"
            onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(undefined, {})(LoginPage);
