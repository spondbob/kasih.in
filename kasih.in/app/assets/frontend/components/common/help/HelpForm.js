import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as helpActions from '../../../actions/helpActions';

class HelpForm extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      help: { message: "" }
    };

    this.onMessageChange = this.onMessageChange.bind(this);
    this.onClickPost = this.onClickPost.bind(this);
  }

  onMessageChange(event){
    const help = this.state.help;
    help.message = event.target.value;
    this.setState({help: help});
  }

  onClickPost(event){
      this.props.actions.createHelp(this.state.help);
  }

  helpRow(help, index){
    return <div key={index}>{help.message}</div>;
  }

  render(){
    return (
      <div>
        <h2>Need help?</h2>
        <input
          type="text"
          onChange={this.onMessageChange}
          value={this.state.help.message} />
        <input
          type="submit"
          value="Post"
          className="btn btn-primary"
          onClick={this.onClickPost} />
        <h3>Helps</h3>
        {this.props.helps.map(this.helpRow)}
      </div>

    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  helps: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    helps: state.helps
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(helpActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpForm);
