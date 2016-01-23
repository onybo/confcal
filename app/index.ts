require("!style!css!../styles/style.css");
require('react-tap-event-plugin');
import injectTapEventPlugin from 'react-tap-event-plugin'; 

import * as React from 'react'; 
import * as ReactDOM from 'react-dom';

import {default as App} from './components/App';

injectTapEventPlugin();
ReactDOM.render(React.createElement(App), document.getElementById('content'));