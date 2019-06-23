export const routesConfig = {
    home: { route: '/', name: 'home' },
    blog: { route: '/blog', name: 'blog' }
};

export const languagesConfig = {
    de: { name: 'navigation.language.de', value: 'de_DE' },
    pl: { name: 'navigation.language.pl', value: 'pl_PL' },
    en: { name: 'navigation.language.en', value: 'en_US' }
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
