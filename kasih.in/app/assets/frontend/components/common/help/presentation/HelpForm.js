import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class HelpForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      help: { message: "" },
    };

    this.onMessageChange = this.onMessageChange.bind(this);
    this.onClickPost = this.onClickPost.bind(this);
  }

  onMessageChange(event) {
    const help = this.state.help;
    help.message = event.target.value;
    this.setState({ help });
  }

  onClickPost(event) {
    this.props.actions.createHelp(this.state.help);
  }

  render() {
    return (
      <div className="container">
        <h4 className="center">What can you help today?</h4>
        <div>
          <TextField
            id="text-field-help-feed"
            onChange={this.onMessageChange}
            value={this.state.help.message} />
        </div>
        <div>
          <RaisedButton
            primary
            label="POST"
            icon={<FontIcon className="material-icons">send</FontIcon>}
            onClick={this.onClickPost} />
        </div>
      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
};


export default HelpForm;
