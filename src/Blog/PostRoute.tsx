import React from 'react';
import { Slugify } from '../Helper/URLHelper';
import { NotFound } from '../NotFound';
import { PostsList } from './PostsList';
import { SinglePost } from './SinglePost';

export const PostRoute: React.FC = (props: any) => {
    const postUrl = props.match.params.slug;
    const foundPosts = PostsList.filter((entry) => {
        return Slugify(entry.title) === postUrl;
    });

    if (foundPosts.length === 0) {
        return <NotFound text="Post not found" />;
    }

    const post = foundPosts[0];

    return <SinglePost {...post} />;
};
