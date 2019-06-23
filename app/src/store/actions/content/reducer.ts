import { produce } from 'immer';

import { State, Action, ActionTypes } from '@App/store';
import { content as initialState } from './initialState';

export default (state = initialState, action: Action) => {
    return produce(state, (draft) => {
        const { type, payload } = action;
        switch (type) {
            case ActionTypes.SET_BLOG_POSTS: {
                draft.blog.posts = payload;
                return;
            }
        }
    });
};
