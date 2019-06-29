import { HelloWorld } from './2019/06/HelloWorld';
import { IPost } from './IPost';

export const posts: IPost[] = [
    {
        title: 'Hello world (again)!',
        publishDate: new Date(2019, 6, 29),
        Component: HelloWorld,
    },
];
