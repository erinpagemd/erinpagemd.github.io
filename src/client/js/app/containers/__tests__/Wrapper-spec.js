import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import Wrapper from '../Wrapper';

const mockStore = configureStore();


describe('<Wrapper />', () => {
  let cmpt;
  const breakPoints = { vsm: true, sm: true, heroLg: true, videoMd: true, videoLg: false };
  const initialState = {
    app: fromJS({
      breakPoints,
      nav: {
        open: breakPoints.sm,
      },
      titles: []
    }),
    routing: {
      locationBeforeTransitions: {
        pathname: '/'
      }
    }
  };
  const store = mockStore(initialState);

  beforeEach(() => {
    cmpt = shallow(<Wrapper store={store} location={{ pathname: '/' }} />);
  });

  it('renders without exploding', () => {
    expect(cmpt.length).toEqual(1);
    expect(cmpt.shallow().find('main')).toBeTruthy();
  });
});
