import { Post } from '@Server/mapper';

export type Content = {
    blog: {
        posts: Post[];
    };
};

export const content: Content = {
    blog: {
        posts: [],
    },
};
