import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as helpActions from '../../../actions/helpActions';
import HelpFormUI from './presentational/HelpForm';

class HelpForm extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      help: { message: "" }
    };

  }

  render(){
    return (
      <HelpFormUI actions={this.props.actions} helps={this.props.helps} />
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
