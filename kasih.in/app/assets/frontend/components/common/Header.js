import React from 'react';
import { Link, IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { darkWhite } from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
  },
};

const Header = () => (
  <AppBar
    title="Kasih.in"
    style={styles.root}
    iconElementLeft={
    <IconButton
      containerElement={<Link to="/" />}>
      <NavigationClose />
    </IconButton>}
    iconElementRight={
      //TODO: Change the icon once you have
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem 
          primaryText="About"
          containerElement={<Link to="/about" />}
        />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
    /> 
);

export default Header;
