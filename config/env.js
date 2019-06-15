require('dotenv').config();
const allowedEnvVariables = [
    'CONTENTFUL_CD_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_SPACE_ID',
    'CONTENTFUL_ENV'
];

// TODO: Improve type
// type EnvVars = {
//     [key: string]: string
// };

export const env = allowedEnvVariables.reduce((acc, envVar) => {
    if (!process.env[envVar]) {
        console.log(process.env);
        throw new Error(`${envVar} env variable not found in process.env`);
    }
    acc[envVar] = process.env[envVar]

    return acc;
}, {})
