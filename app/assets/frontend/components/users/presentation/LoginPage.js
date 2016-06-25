import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

class LoginPage extends React.Component {
  mySubmit(values) {
    this.props.onSave(values).then(() => {
      this.props.resetForm();
    });
  }

  render() {
    const { fields: { username, password, rememberMe } } = this.props;
    const submitClassName = 'ok';

    return (
      <form onSubmit={this.props.handleSubmit(this.mySubmit.bind(this))}>
        <div>
          <TextField
            id="username" 
            hintText="Username"
            errorText={username.touched && username.error} 
            {...username} />
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            hintText="Password"
            errorText={username.touched && username.error} 
            {...password} />
        </div>
        <div>
          <Checkbox 
            id="remember-me"
            label="Remember me?"
            {...rememberMe} />
        </div>
        <br />
        <div>
          <a id="forget-password" href="#">Forget your password?</a>
        </div>
        <br />
        <div>
          <a id="sign-up" href="#">Don't have account?</a>
        </div>
        <br />
        <div>
          <FlatButton primary label="Login" />
        </div>
      </form>
    );
  }
}

LoginPage.propTypes = {
  onSave: PropTypes.func.isRequired,

  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default LoginPage;
