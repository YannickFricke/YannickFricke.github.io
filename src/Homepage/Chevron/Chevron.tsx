import React from 'react';

interface IChevronProps {
    open: boolean;
}

export const Chevron: React.FC<IChevronProps> = (props) => {
    return <div className={`${!props.open ? 'closed' : ''} chevron`} />;
};
