import React from 'react';
import acss from '../utils/acss';

export default class Header extends React.Component {
  render() {
    const { isNotMobile } = this.props;
    const attrs = {
      header: {
        className: acss('Bxsh(headerBoxShadow)', 'D(f)', 'Flxs(0)', 'H(headerHeight)', 'Pos(r)', 'Z(zHead)'),
      },
    };

    return (
      <header {...attrs.header}>
        Home {isNotMobile}
        Projects
        Community
        Speaking
        Contact
      </header>
    );
  }
}

Header.propTypes = {
  isNotMobile: React.PropTypes.bool.isRequired,
};
