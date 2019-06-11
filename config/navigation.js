export const routesConfig = {
    home: { route: '/', name: 'home' },
    blog: { route: '/blog', name: 'blog' }
};

export const languagesConfig = {
    de: { name: 'de', value: 'de_DE' },
    pl: { name: 'pl', value: 'pl_PL' },
    en: { name: 'en', value: 'en_US' }
}

export const navigation = {
    main: [
        routesConfig.home,
        routesConfig.blog
    ],
    languages: [
        languagesConfig.de,
        languagesConfig.en,
        languagesConfig.pl
    ]
};
