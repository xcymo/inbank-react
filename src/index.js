import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { HashRouter, Route } from 'react-router-dom'
// Render the main component into the dom

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" component={Main} />
        </div>
    </HashRouter>,
    document.getElementById('app')
);
