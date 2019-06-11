declare const __BROWSER__: string;
declare const __SERVER__: string;

interface Window {
    browserHistory: any;
    store: any;
    __PRELOADED_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
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
declare module '@bootstrap-styled/v4/lib/*'
