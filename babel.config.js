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
    '@babel/react',
    '@babel/typescript'
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

console.log('Babel config');

module.exports = {
    compact: true,
    presets: presets,
    plugins: plugins,
    env: env
}
