import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import WithHooks from './WithHooks';
import WithState from './WithState';

const AppRoot: React.FC = () => (
    <>
        <h2>ToDo Apps</h2>
        <Router>
            <ul>
                <li>
                    <Link to="/state">with State</Link>
                </li>
                <li>
                    <Link to="/hooks">with Hooks</Link>
                </li>
            </ul>
            <Route path="/state" component={WithState} />
            <Route path="/hooks" component={WithHooks} />
        </Router>
    </>
);

const container = document.getElementById('container');

ReactDOM.render(<AppRoot />, container);
