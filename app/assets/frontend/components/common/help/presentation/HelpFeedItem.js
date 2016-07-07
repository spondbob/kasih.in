import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText } from 'material-ui/Card';

// TODO: Optimize the usage of cards
// CardMedia: Add card media / maps?
// CardTitle => Subtitle?
// CardText => Message?
// CardActions: What actions can a user do?
// Source: http://www.material-ui.com/ => Components => Cards

const HelpFeedItem = (props) =>
  <Card>
    <CardHeader
      title={props.item.name}
      subtitle={props.item.message}
      actAsExpander
      showExpandableButton
      avatar="images/yuna.jpg" />
    <CardText expandable>
      {props.item.description}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>;

HelpFeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HelpFeedItem;
