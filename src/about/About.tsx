import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon } from 'semantic-ui-react';
import { CONTACTME_URL } from '../routes';

import './About.scss';

const getAge = (birthday: Date) => {
    return moment().diff(moment(birthday), 'years');
};

// tslint:disable:max-line-length
const About = () => {
    const [index, setIndex] = useState(0);
    const birthDate = new Date(1994, 2, 3);

    const clickHandler = (event: any, elemProps: any) => {
        const elementIndex = elemProps.index;

        const newIndex = elementIndex === index ? -1 : elementIndex;

        setIndex(newIndex);
    };

    return (
        <div>
            <h1>About me</h1>
            <p>My name is Yannick Fricke. I am currently {getAge(birthDate)} years old and live in Germany.</p>

            <Accordion>
                <Accordion.Title active={index === 0} index={0} onClick={clickHandler}>How it all started <span><Icon name={index === 0 ? 'chevron down' : 'chevron left'} /></span></Accordion.Title>
                <Accordion.Content active={index === 0}>
                    <p>In my early days (around age 8) I was fascinated about computers and I thought: "One day I would like to know how to make applications"</p>
                    <p>Still interested I lend some IT books from our local library with the age of 12</p>
                    <p>For sure, with that age you don't know all the words, so you have to gain a bigger vocabulary.</p>
                    <p>With the age of 16 I bought my first own book for 50 &euro; (that was my pocket money for a whole month!).</p>
                    <p>Visual Basic .Net was my first choice, because I heard from a friend that it should be easy to learn.</p>
                    <p>But sadly I lost the interest in it because I didn't understand arrays (now I laught about that!).</p>
                    <p>Giving up? No way! After a short break I started to learn PHP. In these days I found a very nice mentor who helped me a lot and I'm very grateful for him.</p>
                    <p>Now I'm practicing PHP for several years and learned some other languages (which are listed below).</p>
                </Accordion.Content>

                <Accordion.Title active={index === 1} index={1} onClick={clickHandler}>Hobbies <span><Icon name={index === 1 ? 'chevron down' : 'chevron left'} /></span></Accordion.Title>
                <Accordion.Content active={index === 1}>
                    <p>In my freetime I enjoy doing the following things:</p>
                    <ul>
                        <li>Coding interesting side projects</li>
                        <li>Going to the gym</li>
                        <li>Meeting my friends</li>
                        <li>Riding my bike</li>
                        <li>Streaming on Twitch</li>
                    </ul>
                </Accordion.Content>

                <Accordion.Title active={index === 2} index={2} onClick={clickHandler}>Languages I know <span><Icon name={index === 2 ? 'chevron down' : 'chevron left'} /></span></Accordion.Title>
                <Accordion.Content active={index === 2}>
                    <ul>
                        <li>German (native language)</li>
                        <li>English (fluent)</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Golang</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS + SCSS</li>
                        <li>SQL</li>
                        <li>TypeScript</li>
                    </ul>
                </Accordion.Content>

                <Accordion.Title active={index === 3} index={3} onClick={clickHandler}>Technologies I use <span><Icon name={index === 3 ? 'chevron down' : 'chevron left'} /></span></Accordion.Title>
                <Accordion.Content active={index === 3}>
                    <p>Server side</p>
                    <ul>
                        <li><a href="https://nodejs.org/en/">Node.js</a></li>
                        <li><a href="https://www.docker.com/">Docker</a></li>
                        <li><a href="https://symfony.com/">Symfony (2, 3, 4)</a></li>
                        <li><a href="https://shopware.com">Shopware</a></li>
                        <li><a href="https://webpack.js.org/">Webpack</a></li>
                        <li><a href="https://github.com/semantic-release/semantic-release">Semantic-Release</a></li>
                        <li><a href="https://www.mysql.com/">MySQL</a></li>
                    </ul>

                    <p>Client side</p>
                    <ul>
                        <li><a href="https://reactjs.org/">React.JS</a></li>
                        <li><a href="https://semantic-ui.com/">Semantic UI</a></li>
                        <li><a href="https://github.com/commitizen/cz-cli">Commitizen</a></li>
                        <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
                    </ul>

                    <p>Continuous integration services</p>
                    <ul>
                        <li><a href="https://travis-ci.org/">TravisCI</a></li>
                        <li><a href="https://gitlab.com/">GitLab CI</a></li>
                    </ul>
                </Accordion.Content>

                <Accordion.Title active={index === 4} index={4} onClick={clickHandler}>Software I use <span><Icon name={index === 4 ? 'chevron down' : 'chevron left'} /></span></Accordion.Title>
                <Accordion.Content active={index === 4}>
                    <p>Operating systems</p>
                    <ul>
                        <li>Linux (for development)</li>
                        <li>Windows (for other stuff)</li>
                    </ul>

                    <p>Applications</p>
                    <ul>
                        <li><a href="https://discordapp.com/">Discord</a></li>
                        <li><a href="https://gitter.im">Gitter</a></li>
                        <li><a href="https://www.mozilla.org/de/firefox/">Firefox</a></li>
                        <li><a href="https://git-scm.com/">Git</a></li>
                        <li><a href="https://www.gitkraken.com/">GitKraken</a></li>
                    </ul>

                    <p>IDEs (Integrated Development Environments)</p>
                    <ul>
                        <li><a href="https://jetbrains.com">In general JetBrains IDEs</a></li>
                        <li><a href="https://code.visualstudio.com/">Visual Studio Code (for JavaScript and TypeScript)</a></li>
                    </ul>
                </Accordion.Content>
            </Accordion>

            <p style={{ textAlign: 'center' }}>
                If you want to contact me, feel free to check out my <Link to={CONTACTME_URL}>Contact me</Link> page.
            </p>
        </div>
    );
};

export default About;
