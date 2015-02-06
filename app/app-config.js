module.exports = {
    redirects: {
        '/': '/rotate',

        '/rotate': '/rotate/territory',
        '/rotate/territory': '/rotate/territory/hierarchy',

        '/rotate/team': '/rotate/team/list',
        '/rotate/history':'/rotate/history/list',
        '/rotate/message':'/rotate/message/list'
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
        },
        {
            text: '规则运行历史查询',
            path: '/rotate/history',
            external: false
        },
        {
            text: '消息中心',
            path: '/rotate/message',
            external: false
        }

    ]
}