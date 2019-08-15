import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../IPost';
import { PostEntry } from '../PostEntry';

interface IPaginationProps {
    posts: IPost[];
    perPage: number;
    url?: string;
}

const getCurrentPage = () => {
    const params = new URLSearchParams(location.search);
    const pageParameter = params.get('page');
    const page = pageParameter === null ? 1 : parseInt(pageParameter, 10);

    return page < 1 ? 1 : page;
};

const filterPosts = (page: number, perPage: number, posts: IPost[]) => {
    const startIndex = (page * perPage);
    const endIndex = startIndex + perPage;

    return posts.filter((entry, index) => {
        return index >= startIndex && index < endIndex;
    });
};

export const Pagination: React.FC<IPaginationProps> = (props) => {
    let page = getCurrentPage();
    const pages = Math.ceil(props.posts.length / props.perPage);

    if (page > pages) {
        page = 1;
    }

    const filteredPosts: IPost[] = filterPosts(
        page - 1,
        props.perPage,
        props.posts,
    );
    const url = props.url || '/blog';

    return (<>
        {filteredPosts.map((entry, index) => {
            return <PostEntry key={index} {...entry} />;
        })}

        {pages > 1 && <div id="pagination">
            {page > 1 && <Link className="chevron" id="previousButton" to={`${url}${page === 2 ? '' : `?page=${page - 1}`}`} />}
            <div id="current-page">Current page: {page}</div>
            {page < pages && <Link className="chevron" id="nextButton" to={`${url}?page=${page + 1}`} />}
        </div>}
    </>);
};
