import React from 'react';
import { IProjectEntry } from './ProjectEntries';
import { ExternalLink } from './ExternalLink';

export const Project: React.FC<IProjectEntry> = (props) => {
    const projectName =
        props.url !== undefined ? (
            <a href={props.url}>
                {props.name} <ExternalLink />
            </a>
        ) : (
            props.name
        );

    return (
        <div className='project'>
            <div className='project-name'>{projectName}</div>
            {props.description && (
                <div className='project-description'>{props.description}</div>
            )}
            <div className='project-languages'>
                {props.usedLanguages.map((entry, index) => {
                    return (
                        <div key={index} className='project-language'>
                            {entry}
                        </div>
                    );
                })}
            </div>
            <div className='gained-expertise'>
                <p>What I learned:</p>
                <ul>
                    {props.gainedExpertise.map((entry, index) => {
                        return <li key={index}>{entry}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
