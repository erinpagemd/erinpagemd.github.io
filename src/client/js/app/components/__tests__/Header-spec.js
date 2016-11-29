import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header />', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<Header isNotMobile={true} />);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });
});
