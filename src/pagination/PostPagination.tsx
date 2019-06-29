import moment = require('moment');
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import slugify from 'slugify';
import { IPost } from '../posts/IPost';

interface IPostPaginationProps {
    /**
     * The posts to paginate
     *
     * @type {IPost[]}
     * @memberof IPostPaginationProps
     */
    posts: IPost[];

    /**
     * Contains the number of posts which should be displayed per page
     *
     * @type {number}
     * @memberof IPostPaginationProps
     */
    perPage: number;
}

const filterPosts = (page: number, perPage: number, posts: IPost[]) => {
    const startIndex = (page * perPage);
    const endIndex = startIndex + perPage;

    return posts.filter((entry, index) => {
        return index >= startIndex && index < endIndex;
    });
};

const PostPagination = (props: IPostPaginationProps) => {
    const pages = Math.ceil(props.posts.length / props.perPage);
    const [page, setPage] = useState(0);
    let filteredPosts: IPost[] = filterPosts(page, props.perPage, props.posts);

    useEffect(() => {
        filteredPosts = filterPosts(page, props.perPage, props.posts);
    }, [page]);

    return (<>
        {pages - 1 > page &&
            <div style={{ textAlign: 'center' }}>
                <Icon name={'chevron left'} onClick={() => {
                    if (page === 0) {
                        return;
                    }

                    setPage(page - 1);
                }} />
                <Icon name={'chevron right'} onClick={() => {
                    if (page === pages - 1) {
                        return;
                    }

                    setPage(page + 1);
                }} />
            </div>}

        {filteredPosts.map((entry, index) => {
            return <div key={index}>
                <h1><Link to={'/post/' + slugify(entry.title, {
                    lower: true,
                })}>{entry.title}</Link></h1>
                <p className={'publishdate'}>Published at {moment(entry.publishDate).format('DD.MM.YYYY')}</p>
            </div>;
        })}
    </>);
};

export default PostPagination;
