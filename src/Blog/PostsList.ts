import { IPost } from './IPost';
import { HelloWorld } from './Posts/2019/06/HelloWorld';

export const PostsList: IPost[] = [
    {
        title: 'Hello world (again)!',
        Component: HelloWorld,
        publishDate: new Date(2019, 5, 29),
        tags: [],
    },
];
