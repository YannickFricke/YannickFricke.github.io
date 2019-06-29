import React from 'react';
import PostPagination from '../pagination/PostPagination';
import { posts } from '../posts';

import './frontpage.scss';

export const Frontpage: React.FC = (props: any) => {
    return <PostPagination
        posts={posts}
        perPage={2}
    />;
};
