// Thanks to https://github.com/manuelbieh/react-ssr-setup/blob/master/config/webpack.config.js/loaders.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP !== 'true';
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex = /\.css$/;
const cssSassRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.css$/;

const babelLoader = {
    test: /\.(js|jsx|ts|tsx|mjs)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: [
            [
                require.resolve('babel-plugin-named-asset-import'),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                        },
                    },
                },
            ],
        ],
        cacheDirectory: true,
        cacheCompression: process.env.NODE_ENV === 'production',
        compact: process.env.NODE_ENV === 'production',
    },
};

const cssModuleLoaderClient = {
    test: cssModuleRegex,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                camelCase: true,
                modules: true,
                importLoaders: 1,
                sourceMap: generateSourceMap,
                // localIdentName: '[name]__[local]--[hash:base64:5]',
                getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const cssLoaderClient = {
    test: cssSassRegex,
    exclude: cssModuleRegex,
    use: [
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve('sass-loader'), // compiles Sass to CSS
        },
    ],
};

const cssModuleLoaderServer = {
    test: cssModuleRegex,
    use: [
        {
            loader: require.resolve('css-loader'),
            options: {
                exportOnlyLocals: true,
                camelCase: true,
                importLoaders: 1,
                modules: true,
                // localIdentName: '[name]__[local]--[hash:base64:5]',
                getLocalIdent: getCSSModuleLocalIdent,
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const sassLoaderClient = {
    test: /\.(scss)$/,
    use: [
        {
            loader: 'css-loader', // translates CSS into CommonJS modules
        },
        {
            loader: 'postcss-loader', // Run post css actions
            options: {
                plugins: function() {
                    // post css plugins, can be exported to postcss.config.js
                    return [require('precss'), require('autoprefixer')];
                },
            },
        },
        {
            loader: 'sass-loader', // compiles Sass to CSS
        },
    ],
};

const cssLoaderServer = {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: [
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
    ],
};

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
};

const fileLoaderClient = {
    exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const fileLoaderServer = {
    exclude: [/\.(js|tsx|ts|tsx|css|mjs|html|ejs|json)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false,
            },
        },
    ],
};

const appclient = [
    {
        oneOf: [
            babelLoader,
            cssModuleLoaderClient,
            cssLoaderClient,
            sassLoaderClient,
            urlLoaderClient,
            fileLoaderClient,
        ],
    },
];
const appserver = [
    {
        oneOf: [
            babelLoader,
            cssModuleLoaderServer,
            cssLoaderServer,
            urlLoaderServer,
            fileLoaderServer,
        ],
    },
];
const server = [
    {
        oneOf: [babelLoader, urlLoaderServer, fileLoaderServer],
    },
];

module.exports = {
    appclient,
    appserver,
    server,
};
