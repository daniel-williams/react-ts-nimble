import 'babel-polyfill';
import 'ts-helpers';

let context = require.context('../test', true, /\.test.tsx?$/);
context.keys().forEach(context);
