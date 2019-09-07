import React from 'react';
import Helmet from 'react-helmet';

interface ITitleProps {
    title: string;
}

export const Title: React.FC<ITitleProps> = (props) => {
    return <Helmet>
        <title>{props.title} | Yannick Fricke</title>
    </Helmet>;
};
