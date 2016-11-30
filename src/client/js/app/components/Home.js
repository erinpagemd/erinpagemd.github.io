import React from 'react';
import acss from '../utils/acss';
import HomeIcon from '../../../img/sprite/home.svg';
import Speaking from './Speaking';

export default class Home extends React.Component {
  render() {
    const attrs = {
      div: {
        className: acss('Bgc(grey)')
      },
      h1: {
        className: acss('Fw(lr)', 'Fz(1.5em)', 'Fz(1.75em)--sm', 'Mb(gutter)', 'Mt(0)', 'Mx(a)')
      },
    };

    return (
      <div {...attrs.div}>
        <h1 {...attrs.h1}>Erin M Page</h1>
        <p> Web Application Engineer | Nashville, Tennessee </p>
        <svg>
          <use xlinkHref={HomeIcon} />
        </svg>
        <Speaking />
      </div>
    );
  }
}
