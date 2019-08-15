import React from 'react';

interface INotFoundProps {
    text?: string;
}

export const NotFound: React.FC<INotFoundProps> = (props) => {
    return <div id="not-found">
        <div id="code">404</div>
        <div id="text">
            {props.text === undefined ? 'Page not found' : props.text}
        </div>
    </div>;
};
