import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import GoogleMap from 'google-map-react';

const styles = {
  modal: {
    width: '80%',
    maxWidth: 'none',
  },
  textarea: {
    width: '100%',
  },
};

const HelpLocationModal = (props) =>
  <Dialog
    title="Choose your location"
    open={props.locationModalIsOpened}
    contentStyle={styles.modal}
    actions={[
      <FlatButton
        key="cancelButton"
        label="Cancel"
        primary
      />,
      <FlatButton
        key="saveButton"
        label="Save"
        primary
        onTouchTap={props.hideLocationModalAction}
      />,
    ]}>
    <div style={{ width: '100%', height: '400px' }}>
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center} />
    </div>
  </Dialog>;

HelpLocationModal.defaultProps = {
  center: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
};

HelpLocationModal.propTypes = {
  locationModalIsOpened: PropTypes.bool.isRequired,
  hideLocationModalAction: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default HelpLocationModal;
