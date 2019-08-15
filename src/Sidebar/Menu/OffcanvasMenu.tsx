import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { MenuEntries } from './MenuEntries';

interface IOffcanvasMenuProps {
    setOffcanvasMenuOpenState: Dispatch<SetStateAction<boolean>>;
}

export const OffcanvasMenu: React.FC<IOffcanvasMenuProps> = (props) => {
    return <div id="offcanvas">
        <div className="innermenu">
            <ul>
                {MenuEntries.map((entry, index) => {
                    return <li key={index}>
                        <Link
                            to={entry.url}
                            onClick={() => {
                                props.setOffcanvasMenuOpenState(false);
                            }}
                        >{entry.title}</Link>
                    </li>;
                })}
            </ul>
        </div>

        <div id="close-button" onClick={() => {
            props.setOffcanvasMenuOpenState(false);
        }}>
            &times;
        </div>
    </div>;
};
