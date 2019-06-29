import React from 'react';
import slugify from 'slugify';
import { posts } from '.';
import { FRONTPAGE_URL } from '../routes';
import { Post } from './Post';

export const PostRoute: React.FC = (props: any) => {
    const postUrl = props.match.params.name;
    const foundPosts = posts.filter((entry) => {
        return slugify(entry.title, {
            lower: true,
        }) === postUrl;
    });

    if (foundPosts.length === 0) {
        props.history.push(FRONTPAGE_URL);

        return <></>;
    }

    return <Post post={foundPosts[0]} />;
};
