import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import acss from './utils/acss';
import Root from './containers/Root';

let store = configureStore();

// Dev Tools
const devTools = __DEV__ ? <DevTools store={store} /> : undefined;

// Take care of font-loading
(sessionStorage.getItem('foutFontsLoaded') ? Promise.resolve() : new FontFaceObserver('Source Sans Pro').load()).then(() => {
  document.documentElement.className += ` ${acss('Font-SourceSansPro')}`;
  sessionStorage.setItem('foutFontsLoaded', 'y');
});

ReactDOM.render(
  <div className={acss('H(100%)')}>
    <Root store={store} />
    {devTools}
  </div>,
  document.getElementById('wrapper')
);
