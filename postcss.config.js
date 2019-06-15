const paths = require('./config/constants').paths;
const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [path.resolve(paths.RESOURCES)],
        }),
        require('postcss-nested')(),
        require('postcss-flexbugs-fixes')(),
        require('autoprefixer')(),
        require('postcss-custom-properties')(),
        require('postcss-assets')({
            basePath: path.resolve(paths.RESOURCES),
        }),
        require('postcss-normalize')(),
    ],
    sourceMap: true,
};
