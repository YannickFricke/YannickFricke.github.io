import React from 'react';
import { QuickFacts } from './QuickFacts';

const getAge = () => {
    const d = new Date();
    const birthday = new Date(1994, 2, 3);
    const month = d.getMonth() - birthday.getMonth() <= 0 ? -1 : 0;
    const day = month < 0 ? (d.getDate() - birthday.getDate() < 0 ? -1 : 0) : 0;

    return d.getFullYear() - birthday.getFullYear() + day;
};

export const Homepage: React.FC = () => {
    return <div id="homepage">
        <h2>Welcome on my homepage!</h2>
        <p>My name is Yannick Fricke, I am {getAge()} years old and live in the wonderful city called "Braunschweig" in Germany.</p>
        <p>Here are some facts about me:</p>
        <QuickFacts />
    </div>;
};
