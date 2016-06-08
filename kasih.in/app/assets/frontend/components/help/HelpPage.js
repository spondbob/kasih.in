import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHelpsFeed} from '../../actions/helpActions';
import HelpForm from '../common/help/HelpForm';
import HelpFeedItem from '../common/help/presentation/HelpFeedItem';

function loadData(props) {
  props.getHelpsFeed();
}

class HelpPage extends React.Component {
  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { helps, getHelpsFeed, items, isFetching } = this.props;
    let i = 0;
    return (
      <div>
        <HelpForm />
        <div className="container">
          <ul className="collection collapsible" data-collapsible="accordion">
            {items.map(item =>
              <HelpFeedItem key={item.id} item={item} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

HelpPage.propTypes = {
  helps: PropTypes.object.isRequired,
  getHelpsFeed: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    helps: state.helps,
    items: state.helps.items,
    isFetching: state.helps.isFetching
  };
}

export default connect(mapStateToProps, {getHelpsFeed})(HelpPage);
