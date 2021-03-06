module.exports = {
    redirects: {
        '/': '/rotate',

        '/rotate': '/rotate/territory',
        '/rotate/territory': '/rotate/territory/hierarchy',

        '/rotate/team': '/rotate/team/list',
        '/rotate/history':'/rotate/history/list',
        '/rotate/message':'/rotate/message/list',
        '/rotate/group':'rotate/group/list'
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
        },
        {
            text: '消息中心',
            path: '/rotate/message',
            external: false
        },
        {
            text: '虚拟小组管理',
            path: '/rotate/virtual-team/list',
            external: false
        },
        {
            text: '轮转组运营',
            path: '/rotate/group/list',
            external: false
        },
        {
            text: '门店标记和转移',
            path: '/rotate/shop-handle/list',
            external : false
        },
        {
            text: '报表－跨BU门店',
            path: '/rotate/report/cross-bu-shop-report',
            external : false
        }

    ]
}