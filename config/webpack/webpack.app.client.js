const path = require('path');
const paths = require('../constants').paths;
const loaders = require('./loaders');
const plugins = require('./plugins');
const resolvers = require('./resolvers');
const TerserPlugin = require('terser-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;
const baseConfig = require('./webpack.base');

module.exports = {
    name: 'app:client',
    entry: {
        client: [
            require.resolve('core-js/stable'),
            require.resolve('regenerator-runtime/runtime'),
            path.resolve(paths.APP, 'app.client.tsx'),
        ]
    },
    mode: NODE_ENV,
    target: 'web',
    output: {
        path: path.resolve(paths.APP_DIST),
        filename: 'app.client.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
    },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    resolve: resolvers,
    plugins: [...plugins.shared, ...plugins.client],
    module: { rules: loaders.client },
    optimization: {
        minimizer: [
            new TerserPlugin({
                // TerserPlugin config is taken entirely from react-scripts
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true, // adjust for prod
            }),
        ],
        namedModules: true,
        noEmitOnErrors: true,
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor',
        //             chunks: 'all',
        //         },
        //     },
        // },
    },
    stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
    },
};
