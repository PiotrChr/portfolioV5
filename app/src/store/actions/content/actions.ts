import { Post } from '@Server/mapper';
import { getPosts } from '@App/repository/blogRepository';
import { Dispatch } from 'redux';

export const ActionTypes = {
    SET_BLOG_POSTS: 'SET_BLOG_POSTS',
    FETCH_BLOG_POSTS: 'FETCH_BLOG_POSTS',
};

export const setBlogPosts = (posts: Post[]) => ({
    type: ActionTypes.SET_BLOG_POSTS,
    payload: posts,
});

// export const fetchBlogPosts = () => (dispatch: Dispatch) =>
//     getPosts().then((posts) => {
//         console.log('Tutajj!');
//         dispatch(setBlogPosts(posts));
//     });
export const fetchBlogPosts = () => (dispatch: Dispatch) => {
    getPosts().then((posts) => {
        dispatch(setBlogPosts(posts));
    });
};
