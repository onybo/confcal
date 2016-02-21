// Based on https://github.com/lipis/flag-icon-css/tree/master/flags/4x3/bg.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const France = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#00267f" d="M0 0h213.337v480H0z"/>
      <path fill="#f31830" d="M426.662 0H640v480H426.662z"/>
    </g>
  </SvgIcon>
)

export default France;
