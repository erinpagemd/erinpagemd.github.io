import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<Home />);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
  });
});
