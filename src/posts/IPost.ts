import React from 'react';

/**
 * Represents a blog post
 *
 * @export
 * @interface IPost
 */
export interface IPost {
    /**
     * The title of the post
     *
     * @type {string}
     * @memberof IPost
     */
    title: string;

    /**
     * The date when the post was published
     *
     * @type {Date}
     * @memberof IPost
     */
    publishDate: Date;
    /**
     * The component which should be rendered
     *
     * @type {any}
     * @memberof IPost
     */
    Component: any;
}
