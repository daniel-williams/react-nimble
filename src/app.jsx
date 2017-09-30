import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from "./components/Hello";


const title = 'React Minimal';

ReactDOM.render(
  <div>
    <div>{title}</div>
    <Hello compiler="TypeScript" framework="React" />
  </div>,
  document.getElementById('app')
);