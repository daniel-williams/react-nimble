import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from "./components/Hello";

import './app.scss';


const title = 'React Minimal';

ReactDOM.render(
  <div className='app-card'>
    <div className='title'>{title}</div>
    <Hello compiler="TypeScript" framework="React" />
  </div>,
  document.getElementById('app')
);