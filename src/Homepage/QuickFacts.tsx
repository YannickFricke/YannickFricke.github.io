import React, { useState } from 'react';
import { Chevron } from './Chevron/Chevron';

const getClassNames = (ownIndex: number, currentIndex: number) => {
    return `fact fact-content ${currentIndex === ownIndex ? 'open' : ''}`;
};

export const QuickFacts: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    return <div id="quickfacts">
        <div className="fact fact-header" onClick={() => setCurrentIndex(1)}><Chevron open={currentIndex === 1}/> How it
            all started
        </div>
        <div className={getClassNames(1, currentIndex)}>
            <p>In my early days (around age 8) I was fascinated about computers and I thought: "One day I would like to
                know how to make applications".</p>
            <p>Still interested I lend some IT books from our local library with the age of 12</p>
            <p>For sure, with that age you don't know all the words, so you have to gain a bigger vocabulary.</p>
            <p>With the age of 16 I bought my first own book for 50 &euro; (that was my pocket money for a whole
                month!).</p>
            <p>Visual Basic .Net was my first choice, because I heard from a friend that it should be easy to learn.</p>
            <p>But sadly I lost the interest in it because I didn't understand arrays (now I laught about that!).</p>
            <p>Giving up? No way! After a short break I started to learn PHP. In these days I found a very nice mentor
                who helped me a lot and I'm very grateful for him.</p>
            <p>Now I'm practicing PHP for several years and learned some other languages (which are listed below).</p>
        </div>

        <div className="fact fact-header" onClick={() => setCurrentIndex(2)}><Chevron
            open={currentIndex === 2}/> Hobbies
        </div>
        <div className={getClassNames(2, currentIndex)}>
            <p>In my freetime I enjoy doing the following things:</p>
            <ul>
                <li>Coding interesting side projects</li>
                <li>Going to the gym</li>
                <li>Meeting my friends</li>
                <li>Riding my bike</li>
                <li>Streaming on Twitch</li>
            </ul>
        </div>

        <div className="fact fact-header" onClick={() => setCurrentIndex(3)}><Chevron
            open={currentIndex === 3}/> Languages I know
        </div>
        <div className={getClassNames(3, currentIndex)}>
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
        </div>

        <div className="fact fact-header" onClick={() => setCurrentIndex(4)}><Chevron
            open={currentIndex === 4}/> Technologies I use
        </div>
        <div className={getClassNames(4, currentIndex)}>
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
                <li><a href="https://github.com/features/actions">GitHub Actions</a></li>
            </ul>
        </div>

        <div className="fact fact-header" onClick={() => setCurrentIndex(5)}><Chevron
            open={currentIndex === 5}/> Software I use
        </div>
        <div className={getClassNames(5, currentIndex)}>
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
        </div>
    </div>;
};
