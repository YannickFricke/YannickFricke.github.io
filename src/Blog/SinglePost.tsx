import React from 'react';
import { Link } from 'react-router-dom';
import { FormatDate } from '../Helper/DateHelper';
import { Slugify } from '../Helper/URLHelper';
import { Title } from '../Utilities';
import { IPost } from './IPost';

export const SinglePost: React.FC<IPost> = (props) => {
    const PostComponent = props.Component;

    const taglist = <span>Tags: {props.tags.map((entry, index) => {
        return <span key={entry} className="tag">
            <Link to={`/blog/tag/${Slugify(entry)}`}>{entry}</Link>{index < props.tags.length - 1 && ', '}
        </span>;
    })}</span>;

    return <div id="post">
        <Title title={props.title} />

        <h1 className="title">
            {props.title}
        </h1>
        <div className="meta-information">
            <div className="publish-date">
                Published at: {FormatDate(props.publishDate)}
            </div>
            <div className="tags">
                {props.tags.length > 0 && taglist}
            </div>
        </div>
        <PostComponent />
    </div>;
};
