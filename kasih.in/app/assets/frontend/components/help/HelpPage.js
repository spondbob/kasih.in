import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHelpsFeed} from '../../actions/helpActions';
import HelpForm from '../common/help/HelpForm';
import HelpFeedItem from '../common/help/presentation/HelpFeedItem';

// FIXME:  Don't use react-materialize as it is unstable and not really
// modifiedable.Better to use plain JSX

import {Modal} from 'react-materialize';

function loadData(props) {
  props.getHelpsFeed();
}

class HelpPage extends React.Component {

  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { helps, getHelpsFeed, items, isFetching } = this.props;
    let i = 0;
    return (
      <div>
        <div>
          <HelpForm />
        </div>
        <div className="container">
          <ul className="collection">
            {items.map(item =>
              <Modal key={item.id}
                header={item.name}
                fixedFooter
                trigger={
                  <a>
                    <HelpFeedItem key={item.id} item={item} />
                  </a>
                }>
                // TODO: Placeholder text. Change this to use props instead.
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
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
