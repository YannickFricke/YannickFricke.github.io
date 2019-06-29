import React from 'react';
import { GridColumn, GridRow } from 'semantic-ui-react';
import PostPagination from '../pagination/PostPagination';
import { posts } from '../posts';

import { RouteChildrenProps } from 'react-router';
import './frontpage.scss';

export const Frontpage: React.FC = (props: any) => {
    return <PostPagination
        posts={posts}
        perPage={2}
    />;
};
