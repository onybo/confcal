import Australia from './Australia';
import Argentina from './Argentina';
import Belgium from './Belgium';
import Bulgaria from './Bulgaria';
import Canada from './Canada';
import Denmark from './Denmark';
import France from './France';
import Germany from './Germany';
import Hungary from './Hungary';
import Iceland from './Iceland';
import Israel from './Israel';
import Italy from './Italy';
import Japan from './Japan';
import Lithuania from './Lithuania';
import Netherlands from './Netherlands';
import Norway from './Norway';
import Poland from './Poland';
import Romania from './Romania';
import SouthAfrica from './SouthAfrica';
import Sweden from './Sweden';
import Uk from './Uk';
import Usa from './Usa';
import {Map} from 'immutable';
import * as React from 'react'; 

const stripSpaces = (text) => text.replace(/\s+/g, '');
  
const defaultFlag = (<Usa />);

const valueOrDefault = (value) => 
  value ? value : defaultFlag;
  
export const flagMap = Map(
  {
    Australia: (<Australia />),
    Argentina: (<Argentina />),
    Bulgaria: (<Bulgaria />),
    Belgium: (<Belgium />),
    Canada: (<Canada />),
    Denmark: (<Denmark />),
    France: (<France />),
    Germany: (<Germany />),
    Hungary: (<Hungary />),
    Iceland: (<Iceland />),
    Israel: (<Israel />),    
    Italy: (<Italy />),
    Japan: (<Japan />),
    Lithuania: (<Lithuania />),
    Netherlands: (<Netherlands />),
    Norway: (<Norway />),
    Poland: (<Poland />),
    Romania: (<Romania />),
    SouthAfrica: (<SouthAfrica />),
    Sweden: (<Sweden />),
    UK: (<Uk />),
    USA: (<Usa />),
  }
) 

export const Flag = (props) => (
  valueOrDefault(
    flagMap.get(stripSpaces(props.country))
  )
);