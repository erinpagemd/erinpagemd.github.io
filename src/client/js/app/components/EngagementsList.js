import _ from 'lodash';
import React from 'react';
import acss from '../utils/acss';
import Engagement from './Engagement.js';

export default class EngagementsList extends React.Component {
  renderItems() {
    return _.map(this.props.engagements, (engagement, index) => <Engagement key={index
    } {...engagement} />);
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}
