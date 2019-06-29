import moment = require('moment');
import React from 'react';
import { IPost } from './IPost';

interface IPostProps {
    post: IPost;
}

export const Post: React.FC<IPostProps> = (props) => {
    const PostComponent = props.post.Component;

    return <div>
        <h1>{props.post.title}</h1>
        <p className={'publishdate'}>Published at {moment(props.post.publishDate).format('DD.MM.YYYY')}</p>
        <PostComponent />
    </div>;
};
