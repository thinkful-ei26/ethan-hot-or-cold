import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameParent from './components/gameParent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GameParent />, document.getElementById('root'));


serviceWorker.unregister();