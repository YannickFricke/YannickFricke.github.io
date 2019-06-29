import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import { Frontpage } from './frontpage/Frontpage';
import Menu from './menu/Menu';
import { PostRoute } from './posts/PostRoute';
import { ABOUTME_URL, CONTACTME_URL, FRONTPAGE_URL } from './routes';

import './App.scss';

export const App: React.FC = () => {
    return <HashRouter>
        <Menu />
        <div className="container">
            <Switch>
                <Route exact path={FRONTPAGE_URL} component={Frontpage} />
                <Route path={ABOUTME_URL} component={About} />
                <Route path={CONTACTME_URL} component={Contact} />
                <Route path={'/post/:name'} component={PostRoute} />
            </Switch>
        </div>
    </HashRouter>;
};
