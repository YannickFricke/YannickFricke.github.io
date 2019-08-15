import React from 'react';
import { IProjectEntry } from './ProjectEntries';

export const Project: React.FC<IProjectEntry> = (props) => {
    return <div className="project">
        <div className="project-name">
            <a href={props.url}>{props.name}</a>
        </div>
        <div className="project-languages">
            {props.usedLanguages.map((entry, index) => {
                return <div key={index} className="project-language">
                    {entry}
                </div>;
            })}
        </div>
        <div className="gained-expertise">
            <p>What I learned:</p>
            <ul>
                {props.gainedExpertise.map((entry, index) => {
                    return <li key={index}>
                        {entry}
                    </li>;
                })}
            </ul>
        </div>
    </div>;
};
