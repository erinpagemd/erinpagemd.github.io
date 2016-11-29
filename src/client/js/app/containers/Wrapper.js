import React from 'react';
import { connect } from 'react-redux';
import { Match, Link } from 'react-router';
import debounce from 'lodash.debounce';
import acss from '../utils/acss';
import Header from '../components/Header';
import Home from '../components/Home';
import Content from '../components/Content';
import {
  homeDataPending,
  navToggle,
  onResize
} from '../actions/AppActions';

function mapStateToProps(state) {
  return {
    breakpoint_sm: state.app.getIn(['breakPoints', 'sm']),
    isOpen: state.app.getIn(['nav', 'open']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNavToggle: () => dispatch(navToggle()),
    onHomeDataPending: () => dispatch(homeDataPending()),
    onResize: () => dispatch(onResize()),
  };
}

export class Wrapper extends React.Component {
  componentWillMount() {
    this.onAppEnter();
  }

  componentDidMount() {
    const { onResize } = this.props;

    //This code fires a onResize event that can be tapped into anywhere in the app
    let isResizing;
    const onAppResize = debounce(evt => onResize(evt), 66);

    ['resize', 'orientationchange'].forEach(eventName => window.addEventListener(eventName, evt => {
      if (!isResizing) {
        isResizing = window.requestAnimationFrame(() => {
          isResizing = 0;
          onAppResize(evt);
        });
      }
    }));
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    // if location.pathname is different from the previous, trigger onRouteChange
    if (location.pathname !== nextProps.location.pathname) {
      this.onRouteChange();
    }
  }

  onAppEnter() {
    const { onHomeDataPending } = this.props;
    onHomeDataPending();
  }

  onRouteChange() {
    const { isOpen, onNavToggle } = this.props;

    //If we're on a small screen and we have the nav open: close the nav when we change routes
    if (!Modernizr.mq(Atomizer.breakPoints.sm) && isOpen) {
      onNavToggle();
    }
  }

  render() {
    const { breakpoint_sm, isOpen } = this.props;
    const attrs = {
      main: {
        className: acss('W(100%)', 'H(100%)', 'D(f)', 'Pos(a)', 'Start(0)', 'T(0)', 'Ovx(h)', 'Ovy(a)'),
      },
      div: {
        className: acss('D(f)', 'Fld(c)', 'Flxs(0)', 'Flxs(1)--sm', isOpen ? '' : 'TranslateX(smallContent)', 'TranslateX(0)--sm', 'Trsdu(0.25s)', 'Trsp(a)', 'Trstf(eio)', 'W(100%)'),
      },
    };

    return (
      <main {...attrs.main}>
        <div {...attrs.div}>
          <Header isNotMobile={breakpoint_sm} />
          <Content>
            <Match exactly pattern="/" component={Home} />
          </Content>
        </div>
      </main>
    );
  }
}

Wrapper.propTypes = {
  breakpoint_sm: React.PropTypes.bool.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  onNavToggle: React.PropTypes.func.isRequired,
  onHomeDataPending: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
