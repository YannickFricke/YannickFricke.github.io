import React, { useState } from 'react';
import { Title } from '../Utilities';
import { Project } from './Project';
import { IProjectEntry, ProjectEntries } from './ProjectEntries';
import { Pagination } from '../components/Pagination';

export const Projects: React.FC = () => {
    const [page, setPage] = useState(1);

    return <div id="projects">
        <Title title="Projects"/>
        <Pagination page={page} setPage={(newPage => setPage(newPage))} array={ProjectEntries}
                    renderItem={((entry: IProjectEntry, index) => (
                        <Project key={index}
                                 name={entry.name}
                                 description={entry.description}
                                 url={entry.url}
                                 usedLanguages={entry.usedLanguages}
                                 gainedExpertise={entry.gainedExpertise}
                        />
                    ))}/>
    </div>;
};
