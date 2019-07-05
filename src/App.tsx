import React from 'react';
import ReactGA from 'react-ga';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import { Frontpage } from './frontpage/Frontpage';
import Menu from './menu/Menu';
import { PostRoute } from './posts/PostRoute';
import { ABOUTME_URL, CONTACTME_URL, FRONTPAGE_URL } from './routes';

import './App.scss';

class GAListener extends React.Component {
    public componentDidMount() {
        ReactGA.initialize('UA-143361335-1');
        this.sendPageView();
        window.addEventListener('hashchange', () => {
            this.sendPageView();
        });
    }

    public sendPageView() {
        const page = location.hash.substr(1);

        ReactGA.set({ page });
        ReactGA.pageview(page);
    }

    // tslint:disable-next-line:no-any
    public render() {
        return this.props.children;
    }
}

export const App: React.FC = () => {
    return <HashRouter>
        <GAListener>
            <Menu />
            <div className="container">
                <Switch>
                    <Route exact path={FRONTPAGE_URL} component={Frontpage} />
                    <Route path={ABOUTME_URL} component={About} />
                    <Route path={CONTACTME_URL} component={Contact} />
                    <Route path={'/post/:name'} component={PostRoute} />
                </Switch>
            </div>
        </GAListener>
    </HashRouter>;
};
