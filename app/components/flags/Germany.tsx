// Based on https://github.com/lipis/flag-icon-css/blob/master/flags/4x3/de.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const Germany = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fc0" d="M0 320h640v160.002H0z"/>
      <path d="M0 0h640v160H0z"/>
      <path fill="#f00" d="M0 160h640v160H0z"/>
    </g>
  </SvgIcon>
)

export default Germany;
