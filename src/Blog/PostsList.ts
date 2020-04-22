import { IPost } from './IPost';
import { HelloWorld } from './Posts/2019/06/HelloWorld';
import { ResettableStateInReact } from './Posts/2020/04/ResettableStateInReact';

export const PostsList: IPost[] = [
    {
        title: 'Resettable state in React',
        Component: ResettableStateInReact,
        publishDate: new Date(2020, 3, 22),
        tags: [
            'react',
            'state',
            'react hooks',
        ],
    },
    {
        title: 'Hello world (again)!',
        Component: HelloWorld,
        publishDate: new Date(2019, 5, 29),
        tags: [],
    },
];
