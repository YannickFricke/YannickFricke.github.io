import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { ABOUTME_URL, CONTACTME_URL, FRONTPAGE_URL } from '../routes';

import './Menu.scss';

export default () => {
    return <Menu inverted tabular>
        <Link to={FRONTPAGE_URL}>
            <Menu.Item header>Yannick Fricke</Menu.Item>
        </Link>
        <Link to={FRONTPAGE_URL}>
            <Menu.Item>Home</Menu.Item>
        </Link>
        <Link to={ABOUTME_URL}>
            <Menu.Item>About me</Menu.Item>
        </Link>
        <Link to={CONTACTME_URL}>
            <Menu.Item>Contact me</Menu.Item>
        </Link>
    </Menu>;
};
