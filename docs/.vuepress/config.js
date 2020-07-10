module.exports = {
    title: 'Vue Horizontal Scroller',
    description: 'Native Scroller Vue component',
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/combine/npm/resize-observer-polyfill@1.5.1,npm/smoothscroll-polyfill@0.4.4' }]
    ],
    themeConfig: {
        smoothScroll: true,
        search: false,
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'API', link: '/api' },
            { text: 'inniti', link: 'https://www.inniti.de' }
        ],
        sidebar: [
            ['/', 'Intro'],
            '/installation',
            '/controls',
            '/styling',
            '/api'
        ]
    },
    plugins: [
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // transpileOnly: true,
                    configFile: '../../tsconfig.json'
                }
            }
        ]
    ]
};