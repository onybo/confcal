require("!style!css!../styles/style.css");
require('react-tap-event-plugin');
import injectTapEventPlugin from 'react-tap-event-plugin'; 

import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadConferences } from './actions/conferenceActions'
import {Map} from 'immutable';

import configureStore from './store/configureStore'

declare var module;

const state = Map({
  conferences: Map({}),
  loading: false
});
  
const store = configureStore(state)
const rootEl = document.getElementById('content')

let render = () => {
  const App = require('./containers/App').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
 } 
 
injectTapEventPlugin();

store.dispatch(loadConferences());

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./containers/App', () => {
    setTimeout(render)
  })
}

render()