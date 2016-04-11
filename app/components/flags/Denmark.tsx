// Based on https://github.com/lipis/flag-icon-css/blob/master/flags/4x3/dk.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const Denmark = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <path fill="#c60c30" d="M0 0h640.1v480H0z"/>
    <path fill="#fff" d="M205.714 0h68.57v480h-68.57z"/>
    <path fill="#fff" d="M0 205.714h640.1v68.57H0z"/>
  </SvgIcon>
)

export default Denmark;
