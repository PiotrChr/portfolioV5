import env, { Env } from '@App/store/actions/env/initialState';

export interface State {
    env: Env
}

const initialState: State = {
    env: env
};

export default initialState;
