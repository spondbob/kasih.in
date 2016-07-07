import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  modal: {
    width: '80%',
    maxWidth: 'none',
  },
  textarea: {
    width: '100%',
  },
};

const HelpDescriptionModal = (props) =>
  <Dialog
    title="Add description"
    open={props.modalIsOpened}
    contentStyle={styles.modal}
    actions={[
      <FlatButton
        key="cancelButton"
        label="Cancel"
        primary
        onTouchTap={props.hideDescriptionModalAction}
      />,
      <FlatButton
        key="saveButton"
        label="Submit"
        primary
        onTouchTap={props.hideDescriptionModalAction}
      />,
    ]}>
    <TextField
      id="descriptionTextField"
      multiLine
      style={styles.textarea}
      inputStyle={styles.textarea}
      {...props.description}
    />
  </Dialog>;

HelpDescriptionModal.propTypes = {
  modalIsOpened: PropTypes.bool.isRequired,
  hideDescriptionModalAction: PropTypes.func.isRequired,
  description: PropTypes.object.isRequired,
};

export default HelpDescriptionModal;
