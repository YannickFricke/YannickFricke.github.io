import React from 'react';
import { Slugify } from '../../Helper/URLHelper';
import { NotFound } from '../../NotFound';
import { Pagination } from '../Pagination/Pagination';
import { PostsList } from '../PostsList';

// tslint:disable-next-line:no-any
export const TagRoute = (props: any) => {
    const tag = props.match.params.tag;
    const foundPosts = PostsList.filter((entry) => {
        return entry.tags.map((entryTag) => {
            return Slugify(entryTag);
        }).includes(tag);
    });

    if (foundPosts.length === 0) {
        return <NotFound text="Tag not found"/>;
    }

    return <div id="posts">
        <Pagination perPage={5}
                    posts={foundPosts}
                    url={'/blog/tag/' + tag}/>
    </div>;
};
