import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router } from './router';

import './theme/theme.scss';

const App: React.FunctionComponent = () => <Router />;

const render = () => {
  const entryPoint = document.getElementById('app');

  ReactDOM.render(<App />, entryPoint);
};

render();