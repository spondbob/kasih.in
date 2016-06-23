import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';

export const fields = ['username', 'password'];

class LoginPage extends React.Component {
  render() {
    const { fields: { username, password } } = this.props;
    return (
      <div>
        <div>
          <div>
            <TextField id="username" type="text" placeholder="Username" {...username} />
          </div>
          {username.touched && username.error && <div>{username.error}</div>}
        </div>
        <div>
          <div>
            <TextField id="password" type="password" placeholder="Password" {...password} />
          </div>
          {password.touched && password.error && <div>{password.error}</div>}
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  fields: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'login',
  fields,
})(LoginPage);
