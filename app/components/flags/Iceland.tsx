// Based on https://github.com/lipis/flag-icon-css/tree/master/flags/4x3/is.svg
// Copyright (c) 2013 Panayiotis Lipiridis

import * as React from 'react'; 
import SvgIcon from 'material-ui/lib/svg-icon';

const Iceland = (props) => (
  <SvgIcon viewBox="0 0 640 480" {...props}>
    <g id="flag" fill-rule="evenodd" strokeWidth="0pt" >
      <rect id="blarfeldur" height="480" width="666.67" y="0" x="0" fill="#003897"/>
      <path id="hviturkross" fill-cmyk="(0 0 0 0)" d="m0 186.67h186.67v-186.67h106.67v186.67h373.33v106.67h-373.33v186.67h-106.67v-186.67h-186.67v-106.67z" fill="#fff"/>
      <path id="raudurkross" d="m0 213.33h213.33v-213.33h53.333v213.33h400v53.333h-400v213.33h-53.333v-213.33h-213.33v-53.333z" fill="#d72828"/>
    </g>
  </SvgIcon>
)

export default Iceland;
