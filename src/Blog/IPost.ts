
export interface IPost {
    title: string;
    // tslint:disable-next-line:no-any
    Component: any;
    publishDate: Date;
    tags: string[];
}
