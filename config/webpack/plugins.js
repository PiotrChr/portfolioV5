const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugn = require('html-webpack-plugin');
const { paths } = require('../constants');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

const shared = [
    // new BundleAnalyzerPlugin(),
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jquery: "jQuery",
    //     "window.jQuery": "jquery"
    // })
];

const client = [
    new Dotenv(),
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({
        filename:
            process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[contenthash].css',
        chunkFilename:
            process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[contenthash].css',
    }),
    new ManifestPlugin({ fileName: 'manifest.json' }),
    new webpack.DefinePlugin({
        __SERVER__: 'false',
        __BROWSER__: 'true',
    }),
].filter(Boolean);

const server = [
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
        __SERVER__: 'true',
        __BROWSER__: 'false',
    }),
].filter(Boolean);

module.exports = {
    shared,
    client,
    server,
};
