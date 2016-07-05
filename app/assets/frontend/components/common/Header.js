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
import spacing from 'material-ui/styles/spacing';

const styles = {
  appBar: {
    position: 'fixed',
    padding: spacing.desktopGutter,
    top: 0,
    width: '100%',
  },
};

const Header = () => (
  <AppBar
    style={styles.root}
    iconElementLeft={
      <IconButton
        containerElement={<Link to="/" />}>
        <NavigationClose />
      </IconButton>}
      iconElementRight={
        // TODO: Change the icon once you have
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
