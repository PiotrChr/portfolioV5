import { produce } from 'immer';


export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        const { type, payload } = action;

        switch (type) {
            case ActionTypes.SETLOCALE: {
                draft.locale = payload;
                return;
            }
        }
    });
