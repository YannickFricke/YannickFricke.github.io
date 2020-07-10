import { Language } from './Language';

export interface IProjectEntry {
    name: string;
    description?: string;
    url?: string;
    usedLanguages: Language[];
    gainedExpertise: string[];
}

export const ProjectEntries: IProjectEntry[] = [
    {
        name: 'Botvy',
        description: 'A modular chatbot for various streaming services like Twitch, YouTube Gaming',
        url: 'https://github.com/Botvy/Botvy',
        usedLanguages: [
            Language.GIT,
            Language.NodeJS,
            Language.TypeScript,
            Language.Commitizen,
            Language.React,
            Language.Electron,
            Language.Redux,
            Language.Lerna,
            Language.SemanticRelease,
        ],
        gainedExpertise: [
            'Writing a plugin system with react and electron',
            'Using plugins to expand the functionality',
            'Using lerna as monorepo management tool',
            'Using commitizen to generate semantic commits',
            'Using semantic-release to publish new package versions',
        ],
    },
    {
        name: 'React timeline',
        description: 'A responsive timeline component for react',
        url: 'https://github.com/YannickFricke/react-timeline',
        usedLanguages: [
            Language.TypeScript,
            Language.React,
        ],
        gainedExpertise: [
            'Writing a responsive html timeline',
            'Using react as view layer',
            'Positionable elements',
        ],
    },
    {
        name: 'React resettable state',
        description: 'A simple hook to reset a react state to its initial value',
        url: 'https://github.com/YannickFricke/react-resettable-state',
        usedLanguages: [
            Language.TypeScript,
            Language.React,
        ],
        gainedExpertise: [
            'Writing custom hooks for React',
            'Using Github Actions',
        ],
    },
    {
        name: 'Twitch Hoster',
        description: 'A simple react app for hosting defined channels at a specific date and time',
        url: 'https://goofy-turing-583089.netlify.app/',
        usedLanguages: [
            Language.TypeScript,
            Language.TMI,
            Language.React,
        ],
        gainedExpertise: [
            'Writing custom hooks for React',
            'Using Github Actions',
        ],
    },
    {
        name: 'Stream Overlay',
        description: 'My stream overlay for my Twitch channel',
        usedLanguages: [
            Language.TypeScript,
            Language.TMI,
            Language.SocketIO,
            Language.React,
            Language.TipeeeStream,
        ],
        gainedExpertise: [
            'Implementing a realtime socket io server',
            'Using tmi.js for the twitch events',
            'Working with the TipeeeStream api and fetching realtime events',
        ],
    },
    {
        name: 'Twitch Unfollow Notifier',
        description: 'Get notified about Twitch user unfollows and optionally ask them for the reason',
        url: 'https://github.com/YannickFricke/TwitchUnfollowNotifier',
        usedLanguages: [
            Language.NodeJS,
            Language.TypeScript,
        ],
        gainedExpertise: [
            'Working with the Twitch API',
            'Working with rate limits',
            'Queuing requests to circumvent the rate limit and try them again at a later point',
        ],
    },
    {
        name: 'BashMigration',
        description: 'Migration system for servers',
        url: 'https://github.com/YannickFricke/BashMigration',
        usedLanguages: [
            Language.Bash,
        ],
        gainedExpertise: [
            'Scripting with Bash',
            'Writing a migration system',
            'Applying and removing migrations',
        ],
    },
    {
        name: 'Git auto pusher',
        description: 'Pushing new commits each seconds to the current remote',
        url: 'https://github.com/YannickFricke/git-auto-pusher',
        usedLanguages: [
            Language.Bash,
            Language.GIT,
        ],
        gainedExpertise: [
            'Using bash to push new git commits to the current remote',
        ],
    },
    {
        name: 'Gulp Webpack TypeScript React Sass Boilerplate',
        description: 'A boilerplate for Gulp, Webpack, TypeScript, React and SCSS',
        url: 'https://github.com/YannickFricke/gulp-webpack-typescript-react-sass-boilerplate',
        usedLanguages: [
            Language.GIT,
            Language.Webpack,
            Language.BrowserSync,
            Language.TypeScript,
            Language.Gulp,
            Language.AutoPrefixer,
            Language.SCSS,
            Language.React,
            Language.ReactRouter,
        ],
        gainedExpertise: [
            'Scripting with Bash',
            'Writing a migration system',
            'Applying and removing migrations',
        ],
    },
    {
        name: 'YADM Helper',
        description: 'Simple bash files which can be sourced within bash or zsh',
        url: 'https://github.com/YannickFricke/YADM-Helper',
        usedLanguages: [
            Language.Bash,
        ],
        gainedExpertise: [
            'Bash scripting',
            'Defining helper functions for package manager',
            'Installation scripts for specific packages',
            'Setting color variables for bash and zsh',
            'Defining installation steps logging output',
            'Fetch latest GitHub release URL for an specific extension',
        ],
    },
];
