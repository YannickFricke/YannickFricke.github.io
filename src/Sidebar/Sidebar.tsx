import React, { useState } from 'react';
import { Menu } from './Menu/Menu';
import { OffcanvasMenu } from './Menu/OffcanvasMenu';
import { SocialIcons } from './SocialIcons';

export const Sidebar: React.FC = () => {
    const [isOffcanvasMenuOpen, setIsOffcanvasMenuOpen] = useState(false);

    return <div id="sidebar">
        {isOffcanvasMenuOpen && <OffcanvasMenu setOffcanvasMenuOpenState={setIsOffcanvasMenuOpen} />}

        <header>
            Yannick Fricke
            <span className="burger-icon" onClick={() => {
                setIsOffcanvasMenuOpen(!isOffcanvasMenuOpen);
            }}>
                &#9776;
            </span>
        </header>
        <Menu />
        <SocialIcons />
    </div>;
};
