export interface IProjectEntry {
    name: string;
    url: string | undefined;
    usedLanguages: string[];
    gainedExpertise: string[];
}

export const ProjectEntries: IProjectEntry[] = [
    {
        name: 'React resettable state',
        url: 'https://github.com/YannickFricke/react-resettable-state',
        usedLanguages: [
            'React',
            'TypeScript',
        ],
        gainedExpertise: [
            'Writing custom hooks for React',
            'Using Github Actions',
        ],
    },
    {
        name: 'Twitch Unfollow Notifier',
        url: 'https://github.com/YannickFricke/TwitchUnfollowNotifier',
        usedLanguages: [
            'Node.JS',
            'TypeScript',
        ],
        gainedExpertise: [
            'Working with the Twitch API',
            'Working with rate limits',
        ],
    },
    {
        name: 'BashMigration',
        url: 'https://github.com/YannickFricke/BashMigration',
        usedLanguages: [
            'Bash',
        ],
        gainedExpertise: [
            'Scripting with Bash',
            'Writing a migration system',
        ],
    },
];
