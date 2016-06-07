import React, {PropTypes} from 'react';

export default class HelpFeedItem extends React.Component {
  render() {
    const {
      item
    } = this.props

    return (
      <div className="row">
          <div className="col s12 m6">
            <div className="card green">
              <div className="card-content white-text">
                <span className="card-title">{item.name}</span>
                <p>{item.message}</p>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

HelpFeedItem.propTypes = {
  item: PropTypes.object.isRequired
}
