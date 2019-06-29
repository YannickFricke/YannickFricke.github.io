import React from 'react';

import './Contact.scss';

const entries = [
    {
        text: 'From time to time I stream on Twitch.',
        icon: 'twitch',
        url: 'https://twitch.tv/iseven',
    },
    {
        text: 'GitHub &mdash; Where much of my open source code lives <i aria-hidden="true" class="heart icon"}></i>',
        icon: 'github',
        url: 'https://github.com/YannickFricke',
    },
    {
        text: 'Code::Stats &mdash; A nice statistic about which languages I wrote so far',
        icon: 'code',
        url: 'https://codestats.net/users/yfr',
    },
    {
        text: 'Occasionally I twitter',
        icon: 'twitter',
        url: 'https://twitter.com/YannickFricke',
    },
    {
        text: 'Sometimes I post pictures on Instagram',
        icon: 'instagram',
        url: 'https://instagram.com/officiali7',
    },
];

const Contact = () => {
    return (
        <>
            <h1>Contact me</h1>
            <p>You only need to click on the icon to get to the linked website.</p>

            {entries.map((entry, index) => {
                return <div className={'contact-entry'} key={index}>
                    <div>
                        <a href={entry.url}>
                            <i aria-hidden="true" className={entry.icon + ' big icon'}></i>
                        </a>
                        <span dangerouslySetInnerHTML={{ __html: entry.text }}></span>
                    </div>
                </div>;
            })}
        </>
    );
};

export default Contact;
