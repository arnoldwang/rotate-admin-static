module.exports = {
    redirects: {
        '/': '/rotate',

        '/rotate': '/rotate/territory',
        '/rotate/territory': '/rotate/territory/hierarchy',

        '/rotate/team': '/rotate/team/list',
        '/rotate/history':'/rotate/history/list'
    },

    navs: [
        {
            text: '战区层次设置',
            path: '/rotate/territory/hierarchy',
            external: false
        },
        {
            text: '小组管理',
            path: '/rotate/team',
            external: false
        },
        {
            text: '战区管理',
            path: '/rotate/territory/list',
            external: false
        },
        {
            text: '规则运行历史查询',
            path: '/rotate/history',
            external: false
        }

    ]
}