module.exports = {
    title: 'Vue Horizontal Scroller',
    description: 'Native Scroller Vue component',
    themeConfig: {
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
                },
            },
        ],
    ],
}