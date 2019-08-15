import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BlogList } from './Blog/BlogList';
import { PostRoute } from './Blog/PostRoute';
import { TagRoute } from './Blog/Tags/TagRoute';
import { Homepage } from './Homepage/Homepage';
import { NotFound } from './NotFound';
import { Projects } from './Projects/Projects';
import { Sidebar } from './Sidebar/Sidebar';

export const App: React.FC = () => {
    return <BrowserRouter>
        <Sidebar />
        <div id="content">
            <Switch>
                {/* Homepage */}
                <Route exact path={'/'} component={Homepage} />

                {/* Projects */}
                <Route exact path={'/projects'} component={Projects} />

                {/* Blog */}
                <Route exact path={'/blog'} component={BlogList} />
                <Route exact path={'/blog/tag/:tag'} component={TagRoute} />
                <Route exact path={'/blog/:slug'} component={PostRoute} />

                {/* 404 page */}
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>;
};
