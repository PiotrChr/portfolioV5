const allowedEnvVariables = [
    'CONTENTFUL_CD_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_ACCESS_TOKEN',
    'CONTENTFUL_PREVIEW_SPACE_ID',
    'CONTENTFUL_ENV'
];

// TODO: Improve type
type EnvVars = {
    [key: string]: string
};

export const env: EnvVars = allowedEnvVariables.reduce((acc, var) => {
    if (!process.env[var]) {
        throw new Error(`${var} env variable not found in process.env`);
    }
    acc[var] = process.env[var]

    return acc;
}, {})
