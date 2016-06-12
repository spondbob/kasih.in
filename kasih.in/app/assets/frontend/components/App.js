// This component handle the Application template used in every page
import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    let props = this.props.children;
    return (
      <div>
        <Header />
        {props}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
