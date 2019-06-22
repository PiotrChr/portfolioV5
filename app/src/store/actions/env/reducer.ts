import { produce } from 'immer';

import { State, Action, ActionTypes } from '@App/store';
import { env as initialState } from './initialState';

export default (state = initialState, action: Action) => {
    return produce(state, (draft) => {
        const { type, payload } = action;
        switch (type) {
            case ActionTypes.SET_LOCALE: {
                draft.locale = payload;
                return;
            }
        }
    });
};
