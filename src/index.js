import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const myDiv = <div>I am some text</div>;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(myDiv, document.getElementById('container'));
registerServiceWorker();
