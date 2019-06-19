declare module 'express-manifest-helpers';
declare module 'express-memory-cache';
declare module 'express-manifest-helpers';

// TODO: Improve the type EnvVars
// const allowedVars = <const> allowedEnvVariables;
// declare type EnvVars = {
//     [key: typeof allowedVars[number]]: string
// };
declare type EnvVars = {
    [key: string]: string;
};
