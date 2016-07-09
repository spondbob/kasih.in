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
import AddLocationIcon from 'material-ui/svg-icons/maps/add-location';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, getValues } from 'redux-form';
import HelpDescriptionModal from './HelpDescriptionModal';
import HelpLocationModal from './HelpLocationModal';
import isEmpty from 'lodash/isEmpty';
import { cyan500 } from 'material-ui/styles/colors';
import {
  cancelDescriptionModal,
  helpSubmit,
  hideDescriptionModal,
  hideLocationModal,
  showDescriptionModal,
  showLocationModal,
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

  handleLocationOpen() {
    this.props.dispatch(showLocationModal());
  }

  render() {
    const {
      fields: { name, message, description, lang, long },
      handleSubmit,
      resetForm,
      submitting,
      formValues,
      descriptionModalIsOpened,
      hideDescriptionModalAction,
      hideLocationModalAction,
      locationModalIsOpened,
      cancelDescriptionModalAction,
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
              <SubjectIcon
                color={
                  !isEmpty(formValues) && formValues.description !== '' ?
                  cyan500 : ''} />
            </IconButton>
            <IconButton
              tooltip="Location"
              onClick={() => this.handleLocationOpen()}
              disabled={submitting}
              >
              <AddLocationIcon />
            </IconButton>

          </div>
          <HelpDescriptionModal
            descriptionModalIsOpened={descriptionModalIsOpened}
            hideDescriptionModalAction={hideDescriptionModalAction}
            cancelDescriptionModalAction={cancelDescriptionModalAction}
            description={description}
            />
          <HelpLocationModal
            locationModalIsOpened={locationModalIsOpened}
            hideLocationModalAction={hideLocationModalAction}
            />
        </form>


      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  cancelDescriptionModalAction: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  hideDescriptionModalAction: PropTypes.func.isRequired,
  hideLocationModalAction: PropTypes.func.isRequired,
  descriptionModalIsOpened: PropTypes.bool.isRequired,
  locationModalIsOpened: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    descriptionModalIsOpened: state.help.descriptionModalIsOpened,
    formValues: getValues(state.form.help),
    locationModalIsOpened: state.help.locationModalIsOpened,
    submitting: state.help.submitting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelDescriptionModalAction: bindActionCreators(cancelDescriptionModal, dispatch),
    hideDescriptionModalAction: bindActionCreators(hideDescriptionModal, dispatch),
    hideLocationModalAction: bindActionCreators(hideLocationModal, dispatch),
  };
}

const validate = (values) => {
  const errors = {};

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
