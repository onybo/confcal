// Based on https://github.com/lipis/flag-icon-css/tree/master/flags/4x3/bg.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const Bulgaria = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#de2110" d="M0 319.997h640V480H0z"/>
      <path fill="#fff" d="M0 0h640v160.003H0z"/>
      <path fill="#319400" d="M0 160.003h640v160.003H0z"/>
    </g>
  </SvgIcon>
)

export default Bulgaria;
