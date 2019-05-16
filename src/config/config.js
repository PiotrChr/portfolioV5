const config = (env = 'prod', source = process.env.SOURCE || 'app') => {
    const localConfig = require(`./${env}/${source}`);

    return {
        ...localConfig
    };
};

const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

module.exports = config(env);