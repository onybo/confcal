require("!style!css!../styles/style.css");
require('react-tap-event-plugin');
import injectTapEventPlugin from 'react-tap-event-plugin'; 

import * as React from 'react'; 
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { loadConferences } from './actions/conferenceActions'

import App from './components/App';
import store from './store/configureStore';

injectTapEventPlugin();

store.dispatch(loadConferences());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('content')
);