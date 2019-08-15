import slugify from 'slugify';

const slugifyConfig = {
    lower: true,
};

export const Slugify = (text: string) => {
    return slugify(text, slugifyConfig);
};
