import React from 'react';
import { Link } from 'react-router';
import FullWidthSection from '../common/FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, { LARGE } from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { cyan500, grey200, darkWhite } from 'material-ui/styles/colors';

const styles = {
  root: {
    backgroundColor: darkWhite,
    overflow: 'hidden',
  },
  button: {
    margin: 12,
  },
};

const HomePage = () => (
  <FullWidthSection style={styles.root}>
    <div>
      <h1 className="center-align">Kasih.in</h1>
      <h4 className="center-align">Helping people is easy.</h4>
      <RaisedButton 
        label="About"
        primary
        containerElement={<Link to="about" />}
        linkButton
        style={styles.button} />
      <RaisedButton 
        label="Try now"
        secondary
        containerElement={<Link to="help" />}
        linkButton
        style={styles.button} />
    </div>
  </FullWidthSection>
);

export default HomePage;
