import React, { useEffect, useState } from 'react';
import { ProjectEntries } from '../Projects/ProjectEntries';

interface IPaginationProps<T> {
    page: number;
    setPage: (newPage: number) => void;
    elementsPerPage?: number;
    // tslint:disable-next-line:no-any
    array: any[];
    // tslint:disable-next-line:no-any
    renderItem: (entry: any, index: number) => JSX.Element;
}

export const Pagination: React.FC<IPaginationProps<unknown>> = (props) => {
    const [page, setPage] = useState(1);
    const elementsPerPage = props.elementsPerPage ?? 3;
    const [pages, setPages] = useState(
        Math.ceil(props.array.length / elementsPerPage),
    );
    const [elements, setElements] = useState<unknown[]>([]);

    useEffect(() => {
        setPages(Math.ceil(ProjectEntries.length / elementsPerPage));
    }, [props.array]);

    useEffect(() => {
        const position = (page - 1) * elementsPerPage;

        setElements(props.array.slice(position, position + elementsPerPage));
    }, [page, props.array]);

    return (
        <div className='pagination'>
            <div className='pagination--content'>
                {elements.map((entry, index) => props.renderItem(entry, index))}
            </div>
            <div className='pagination--controls'>
                <div
                    className='previous-page'
                    onClick={() => {
                        if (page === 1) {
                            return;
                        }

                        setPage(page - 1);
                    }}
                >
                    &lt;
                </div>
                <div className='pages'>
                    {Array(pages)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className={`page${
                                    page === index + 1 ? ' active' : ''
                                }`}
                                onClick={() => setPage(index + 1)}
                            >
                                &bull;
                            </div>
                        ))}
                </div>
                <div
                    className='next-page'
                    onClick={() => {
                        if (page === pages) {
                            return;
                        }

                        setPage(page + 1);
                    }}
                >
                    &gt;
                </div>
            </div>
        </div>
    );
};
