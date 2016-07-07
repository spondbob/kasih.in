/* TODO: Add more fields to save
 * 1. Address + Maps
 * 2. Photos
 *
 */

import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SubjectIcon from 'material-ui/svg-icons/action/subject';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, getValues } from 'redux-form';
import HelpDescriptionModal from './HelpDescriptionModal';
import {
  showDescriptionModal,
  hideDescriptionModal } from '../../../../actions/helpActions';

export const fields = ['message', 'description', 'photos', 'lang', 'long'];

const styles = {
  root: {
    paddingLeft: 40,
    width: '99%',
  },
  textField: {
    width: '90%',
  },
};

class HelpForm extends React.Component {
  constructor(props) {
    super(props);
    const dispatch = this.props;
  }

  handleDescriptionOpen() {
    this.props.dispatch(showDescriptionModal());
  }

  render() {
    const {
      fields: { message, description },
      handleSubmit,
      resetForm,
      submitting,
      formValues,
      modalIsOpened,
      hideDescriptionModalAction,
    } = this.props;

    return (
      <div style={styles.root}>
        <h1 className="center">What can you help today?</h1>
        <form onSubmit={this.onClickPost}>
          <div>
            <TextField
              style={styles.textField}
              errorText={message.touched && message.error}
              {...message}
              hintText="I want to help ..." />
          </div>
          <div>
            <RaisedButton
              type="submit"
              primary
              disabled={
                formValues === undefined ||
                formValues === null ||
                formValues.message === ''
              }
              label="POST"
              icon={<FontIcon className="material-icons">send</FontIcon>} />
            <IconButton
              tooltip="Description"
              onClick={() => this.handleDescriptionOpen()}
              >
              <SubjectIcon />
            </IconButton>
          </div>
          <HelpDescriptionModal
            modalIsOpened={modalIsOpened}
            hideDescriptionModalAction={hideDescriptionModalAction}
            description={description}
            />
        </form>

      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  modalIsOpened: PropTypes.bool.isRequired,
  formValues: PropTypes.object,
  dispatch: PropTypes.func,
  hideDescriptionModalAction: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    modalIsOpened: state.help.modalIsOpened,
    formValues: getValues(state.form.help),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDescriptionModalAction: bindActionCreators(hideDescriptionModal, dispatch),
  };
}

const validate = (values) => {
  const errors = {};
  const isEmpty = (value) =>
    value === undefined || value === null || value === '';

  if (isEmpty(values.message)) {
    errors.message = 'Message is required';
  }
  return errors;
};

const helpForm = reduxForm({
  form: 'help',
  fields,
  validate,
})(HelpForm);

export default connect(mapStateToProps, mapDispatchToProps)(helpForm);
