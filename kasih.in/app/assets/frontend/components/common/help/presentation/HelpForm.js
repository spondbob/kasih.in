import React, {PropTypes} from 'react';


class HelpForm extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      help: { message: "" }
    };
    this.props.actions.getHelpsFeed();
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

  render(){
    return (
      <div>
        <h4 className="center">What can you help today?</h4>
        <input
          type="text"
          onChange={this.onMessageChange}
          value={this.state.help.message} />
        <input
          type="submit"
          value="Post"
          className="btn btn-primary"
          onClick={this.onClickPost} />

      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired
};


export default HelpForm;
