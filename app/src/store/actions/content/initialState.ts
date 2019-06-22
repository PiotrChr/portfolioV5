import { Post } from '@App/repository/blogRepository';

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
