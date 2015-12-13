require("!style!css!../styles/style.css");

import React  = require('react');
import ReactDOM  = require('react-dom');
import {Conference} from './components/Conference';

console.log("rendering app");
ReactDOM.render(
    React.createElement(Conference, {name: "ndc"}), 
   document.getElementById('content')
);
