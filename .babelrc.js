const path = require('path');

const presets = [
    [
        '@babel/env',
        {
            modules: false,
            targets: {
                browsers: ['last 2 versions', 'ie >= 9'],
            }
        }
    ],
    "next/babel",
    "@zeit/next-typescript/babel"
]

const plugins = [
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    '@babel/syntax-dynamic-import',
    'macros',
];

const env = {
    test: {
        plugins: [
            '@babel/transform-modules-commonjs',
            '@babel/syntax-dynamic-import'
        ]
    }
};

module.exports = {
    presets: presets,
    plugins: plugins,
    env: env
}
