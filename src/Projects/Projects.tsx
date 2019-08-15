import React from 'react';
import { Project } from './Project';
import { ProjectEntries } from './ProjectEntries';

export const Projects: React.FC = () => {
    return <div id="projects">
        {ProjectEntries.map((entry, index) => {
            return <Project key={index}
                name={entry.name}
                url={entry.url}
                usedLanguages={entry.usedLanguages}
                gainedExpertise={entry.gainedExpertise}
            />;
        })}
    </div>;
};
