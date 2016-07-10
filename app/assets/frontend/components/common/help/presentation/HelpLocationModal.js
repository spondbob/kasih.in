import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

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
        onTouchTap={props.handleLocationDiscard}
      />,
      <FlatButton
        key="saveButton"
        label="Save"
        primary
        onTouchTap={props.handleLocationSave}
      />,
    ]}>
    <GoogleMapLoader
      query={{ libraries: "geometry,drawing,places,visualization" }}
      containerElement={
        <div
          style={{
            width: '100%',
            height: '400px',
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={18}
          defaultCenter={props.center}
        >
          <Marker
            draggable
            position={props.marker}
            onDragend={props.handleMarkerPositionChanged}
          />

        </GoogleMap>
      }
    />
  </Dialog>;

HelpLocationModal.defaultProps = {
  center: { lat: 59.938043, lng: 30.337157 },
  marker: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
};

HelpLocationModal.propTypes = {
  center: PropTypes.object,
  handleLocationSave: PropTypes.func.isRequired,
  handleLocationDiscard: PropTypes.func.isRequired,
  handleMarkerPositionChanged: PropTypes.func,
  hideLocationModalAction: PropTypes.func.isRequired,
  locationModalIsOpened: PropTypes.bool.isRequired,
  marker: PropTypes.object,
  zoom: PropTypes.number.isRequired,
};

export default HelpLocationModal;
