import { env, Env, ActionTypes as EnvTypes } from '@App/store/actions/env';
import { content, Content, ActionTypes as ContentTypes } from '@App/store/actions/content';

export type Action = {
    type: string;
    payload: any;
};

export type State = Readonly<{
    env: Env;
    content: Content;
}>;

export const ActionTypes = {
    ...EnvTypes,
    ...ContentTypes,
};

export const initialState: State = {
    env: env,
    content: content,
};

export default initialState;
