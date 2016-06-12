import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHelpsFeed } from '../../actions/helpActions';
import HelpForm from '../common/help/HelpForm';
import HelpFeedItem from '../common/help/presentation/HelpFeedItem';

// FIXME:  Don't use react-materialize as it is unstable and not really
// modifiedable.Better to use plain JSX

import { Modal } from 'react-materialize';

function loadData(props) {
  props.getHelpsFeed();
}

class HelpPage extends React.Component {

  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { helps, items, isFetching } = this.props;
    return (
      <div>
        <div>
          <HelpForm />
        </div>
        <div className="container">
          <ul className="collection">
            {items.map(item =>
              <Modal 
                key={item.id}
                header={item.name}
                fixedFooter
                trigger={
                  <a>
                    <HelpFeedItem key={item.id} item={item} />
                  </a>
                }>
                // TODO: Placeholder text. Change this to use props instead.
                <p>Pellentesque habitant morbi tristique senectus et netus</p>
              </Modal>
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
  isFetching: PropTypes.bool.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    helps: state.helps,
    items: state.helps.items,
    isFetching: state.helps.isFetching,
  };
}

export default connect(mapStateToProps, { getHelpsFeed })(HelpPage);
