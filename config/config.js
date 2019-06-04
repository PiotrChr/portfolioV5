module.exports = (
    env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
    source = process.env.SOURCE || 'app'
) => ({ ...require(`./${env}/${source}`) });
