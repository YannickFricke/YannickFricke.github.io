export interface IProjectEntry {
    name: string;
    url: string;
    usedLanguages: string[];
    gainedExpertise: string[];
}

export const ProjectEntries: IProjectEntry[] = [
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
