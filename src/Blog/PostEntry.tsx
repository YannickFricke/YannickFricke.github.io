import React from 'react';
import { Link } from 'react-router-dom';
import { FormatDate } from '../Helper/DateHelper';
import { Slugify } from '../Helper/URLHelper';
import { IPost } from './IPost';

export const PostEntry: React.FC<IPost> = (props) => {
    const tagList = <span>Tags: {props.tags.map((entry, index) => {
        return <span key={entry} className="tag">
            <Link to={`/blog/tag/${Slugify(entry)}`}>{entry}</Link>
        </span>;
    })}</span>;

    return <div className="post">
        <div className="title">
            <Link to={`/blog/${Slugify(props.title)}`}>{props.title}</Link>
        </div>
        <div className="meta-information">
            <div className="publish-date">
                Published at: {FormatDate(props.publishDate)}
            </div>
            <div className="tags">
                {props.tags.length > 0 && tagList}
            </div>
        </div>
    </div>;
};
