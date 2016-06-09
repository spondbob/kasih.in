import React, {PropTypes} from 'react';

export default class HelpFeedItem extends React.Component {

  render() {
    const {
      item
    } = this.props;

    return (

        <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <span className="title">{item.name}</span>
            <p>{item.message}<br />
            </p>
            <i className="material-icons secondary-content">grade</i>
        </li>

    );
  }
}

HelpFeedItem.propTypes = {
  item: PropTypes.object.isRequired
};
