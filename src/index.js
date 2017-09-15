import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hi from './hello';
import registerServiceWorker from './registerServiceWorker';


const myDiv = <div>I am some text</div>;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(myDiv, document.getElementById('container'));


ReactDOM.render(< Hi/>, document.getElementById('box'));
