import { produce } from 'immer';

import { State, Action, initialState, ActionTypes } from '@App/store';

export default (state: State = initialState, action: Action): State => {
    return produce(state, (draft) => {
        const { type, payload } = action;
        switch (type) {
            case ActionTypes.SET_LOCALE: {
                draft.env.locale = payload;
                return;
            }
        }
    });
};
