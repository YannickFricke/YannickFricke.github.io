import React from 'react';
import { Link } from 'react-router-dom';
import { MenuEntries } from './MenuEntries';

export const Menu: React.FC = () => {
    return <div id="menu">
        <ul>
            {MenuEntries.map((entry, index) => {
                return <li key={index}>
                    <Link to={entry.url}>{entry.title}</Link>
                </li>;
            })}
        </ul>
    </div>;
};
