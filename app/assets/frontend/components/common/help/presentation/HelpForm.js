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
  hideDescriptionModal,
  helpSubmit,
} from '../../../../actions/helpActions';

export const fields = [
  'name',
  'message',
  'description',
  'photos',
  'lang',
  'long',
];

const styles = {
  root: {
    paddingLeft: 40,
    width: '99%',
  },
  textField: {
    width: '90%',
  },
};

const submit = (values, dispatch) => {
  // Here we will assign fields that user does not need to fill.
  // FIXME: name is hardcoded.
  const submitValues = Object.assign({}, values, { name: 'John' });
  return new Promise((resolve, reject) => {
    dispatch(helpSubmit({ submitValues, resolve, reject }));
  });
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
      fields: { name, message, description },
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
        <form onSubmit={handleSubmit(submit.bind(this))}>
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
                formValues.message === '' ||
                submitting
              }
              label="POST"
              icon={<FontIcon className="material-icons">send</FontIcon>} />
            <IconButton
              tooltip="Description"
              onClick={() => this.handleDescriptionOpen()}
              disabled={submitting}
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
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  hideDescriptionModalAction: PropTypes.func.isRequired,
  modalIsOpened: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    modalIsOpened: state.help.modalIsOpened,
    formValues: getValues(state.form.help),
    submitting: state.help.submitting,
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
