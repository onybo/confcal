// Based on https://github.com/lipis/flag-icon-css/tree/master/flags/4x3/gb.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const Uk = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <g clipPath="url(#a)" transform="matrix(.94 0 0 .94 80 0)">
      <g strokeWidth="1pt">
        <path fill="#006" d="M-256 0H768.02v512.01H-256z"/>
        <path d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z" fill="#fff"/>
        <path d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z" fill="#fff"/>
        <path d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z" fill="#c00"/>
      </g>
    </g>
  </SvgIcon>
)

export default Uk;
