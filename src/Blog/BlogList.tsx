import React from 'react';
import { Pagination } from './Pagination/Pagination';
import { PostsList } from './PostsList';

export const BlogList: React.FC = () => {
    return <div id="posts">
        <Pagination perPage={5} posts={PostsList} />
    </div>;
};
