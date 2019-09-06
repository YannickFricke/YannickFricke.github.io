
interface IMenuEntry {
    title: string;
    url: string;
}

export const MenuEntries: IMenuEntry[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'My projects',
        url: '/projects',
    },
    {
        title: 'Blog',
        url: '/blog',
    },
    {
        title: 'Imprint',
        url: '/imprint',
    },
];
