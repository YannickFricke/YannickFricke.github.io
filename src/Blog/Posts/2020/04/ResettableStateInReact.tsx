import React from 'react';

export const ResettableStateInReact: React.FC = () => {
    return <div>
        <p>Hey everyone!</p>
        <p>Finally a new blog post from me!</p>
        <p>Yesterday someone on a Discord server im also in posted a link to this repository: <a
            href="https://github.com/shiftyp/object-hooks-test">https://github.com/shiftyp/object-hooks-test</a>.</p>
        <p>The repository contains a custom React hook with which you can reset your state to the initial state.</p>
        <p>I am using React now for about 1 - 1,5 years and I never thought about resetting the state to its initial state.</p>
        <p>Quickly (in 7 minutes) I smashed together a custom react hook which exactly does this one thing... and I published it on NPM also!</p>
        <p>You can find it here: <a href="https://www.npmjs.com/package/react-resettable-state">https://www.npmjs.com/package/react-resettable-state</a></p>
        <p>And being also an open source enthusiast I published the source code as well under the MIT license: <a
            href="https://github.com/YannickFricke/react-resettable-state">https://github.com/YannickFricke/react-resettable-state</a>.</p>
        <p>(Publishing the code, setting up the GitHub Actions (for testing and releasing) took much longer than writing the hook LOL)</p>
        <h2>What are the benefits of using this package?</h2>
        <p>Oh that's a good question! The Readme file in the repository contains two examples (right now).</p>
        <p>The <a href="https://codesandbox.io/s/react-resettable-state-counter-example-knun5">first example</a> is about a basic counter (yes we all know that kind of example).</p>
        <p>The <a href="https://codesandbox.io/s/react-resettable-state-form-example-sk1dw">second one</a> is about form data.</p>
        <p>If you have another idea of new examples feel free to make a pull request! I would love to see more use cases.</p>
        <h2>How do I use the package?</h2>
        <p>The readme file also includes a code example for JavaScript. If you are using TypeScript take a look on the examples (since they are written in TypeScript).</p>
        <p>So far,</p>
        <p>Yannick Fricke</p>
        <p>PS: Stay healthy in these times! &lt;3</p>
    </div>;
};
