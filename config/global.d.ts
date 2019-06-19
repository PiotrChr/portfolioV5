
declare const __BROWSER__: string;
declare const __SERVER__: string;

interface Window {
    browserHistory: any;
    store: any;
    __PRELOADED_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
    }
}

declare module 'express-manifest-helpers';
declare module '@bootstrap-styled/v4'
declare module '@bootstrap-styled/provider/lib/BootstrapProvider'
declare module 'express-memory-cache';
declare module 'express-manifest-helpers';


// TODO: Improve the type EnvVars
// const allowedVars = <const> allowedEnvVariables;
// declare type EnvVars = {
//     [key: typeof allowedVars[number]]: string
// };
declare type EnvVars = {
    [key: string]: string
};
