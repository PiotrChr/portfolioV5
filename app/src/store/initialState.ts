import { env, Env, ActionTypes as EnvTypes } from '@App/store/actions/env';

export type Action = {
    type: string;
    payload: any;
};

export type State = Readonly<{
    env: Env;
}>;

export const ActionTypes = {
    ...EnvTypes,
};

export const initialState: State = {
    env: env,
};

export default initialState;
