import React from 'react';
import { Title } from '../Utilities';
import { Pagination } from './Pagination/Pagination';
import { PostsList } from './PostsList';

export const BlogList: React.FC = () => {
    return <div id="posts">
        <Title title="Blog" />

        <Pagination perPage={5} posts={PostsList} />
    </div>;
};
