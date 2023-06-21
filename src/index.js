import isSea from './SEA';
import isBR from './BR';

let a = null;
if (__REGION__ === 'BR') {
  a = isBR;
} else {
  a = isSea;
}
