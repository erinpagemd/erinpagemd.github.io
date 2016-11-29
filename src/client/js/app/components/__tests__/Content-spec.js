import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Content from '../Content';

describe('<Content />', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<Content />);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
    expect(cmpt.is('article')).toBe(true);
  });
});
