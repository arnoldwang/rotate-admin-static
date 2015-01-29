module.exports = {
    redirects: {
        '/': '/rotate',

        '/rotate': '/rotate/territory',
        '/rotate/territory': '/rotate/territory/hierarchy',

        '/rotate/team': '/rotate/team/list'
    },

    navs: [
        {
            text: '战区层次设置',
            path: '/rotate/territory',
            external: false
        },
        {
            text: '小组管理',
            path: '/rotate/team',
            external: false
        }
    ]
}