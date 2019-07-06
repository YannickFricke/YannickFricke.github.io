import React from 'react';
import { IPost } from './IPost';

interface IPostProps {
    post: IPost;
}

export const formatDate = (date: Date): string => {
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth()}`.padStart(2, '0');

    return `${day}.${month}.${date.getFullYear()}`;
};

export const Post: React.FC<IPostProps> = (props) => {
    const PostComponent = props.post.Component;

    return <div>
        <h1>{props.post.title}</h1>
        <p className={'publishdate'}>Published at {formatDate(props.post.publishDate)}</p>
        <PostComponent />
    </div>;
};
