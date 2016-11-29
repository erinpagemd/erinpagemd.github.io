import React from 'react';
import acss from '../utils/acss';

export default class Content extends React.Component {
  render() {
    return (
      <article className={acss('Bgc(#e7e7e7)', 'Flxg(1)', 'H(100%)', 'Ovx(h)', 'Ovy(a)', 'Pos(r)', 'Z(zContent)')}>{this.props.children}</article>
    );
  }
}

Content.propTypes = {
  children: React.PropTypes.node,
};

