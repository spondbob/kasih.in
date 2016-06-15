import React, { PropTypes } from 'react';

const HelpFeedItem = (props) => 
  <li className="collection-item avatar">
    <img src="images/yuna.jpg" alt="" className="circle" />
    <span className="title">{props.item.name}</span>
    <p>{props.item.message}<br /></p>
    <i className="material-icons secondary-content">grade</i>
  </li>;

HelpFeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HelpFeedItem;
