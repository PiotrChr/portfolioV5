require('dotenv').config();

// Webpack will replace process.env[var] with corresponding .env var
const clientEnvStatic = {
    'SERVER_BASE_URL': process.env.SERVER_BASE_URL,
    'API_URL': process.env.API_URL,
}

export const allowedEnvVariables = (isServer) => ([
    isServer && 'CONTENTFUL_CD_ACCESS_TOKEN',
    isServer && 'CONTENTFUL_PREVIEW_ACCESS_TOKEN',
    isServer && 'CONTENTFUL_PREVIEW_SPACE_ID',
    isServer && 'CONTENTFUL_ENV',
    ...Object.keys(clientEnvStatic)
]).filter(Boolean);

export const getEnv = (isServer = false) => allowedEnvVariables()
    .reduce((acc, envVar) => {
        const envSource = isServer ? process.env : clientEnvStatic;
        if (!envSource[envVar]) {
            throw new Error(`${envVar} env variable not found in process.env`);
        }
        acc[envVar] = process.env[envVar]

        return acc;
    }, {})
