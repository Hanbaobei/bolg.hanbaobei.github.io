window.$docsify = {
    name: '',
    repo: '',
    // 加载侧边栏
    loadSidebar: 'src/pages/sidebar.md',
    //生成目录的最大层级
    subMaxLevel: 4,
    //加载导航栏
    loadNavbar: "src/pages/navbar.md",
    //加载封面
    coverpage: "src/pages/coverpage.md",
    //加载页脚
    loadFooter: 'src/pages/footer.md',
    //配置首页
    homepage: 'src/pages/home.md',
    //只在访问主页时加载封面
    onlyCover: true,
    //设置文档更新事件格式
    formatUpdated: '{MM}/{DD} {HH}:{mm}',
    //设置打开链接的方式
    externalLinkTarget: '_self', // default: '_blank'
    //设置404页面
    notFoundPage: 'src/pages/404.md',
    //设置代码复制按钮
    copyCode: {
        buttonText: '复制当前代码',
        errorText: '复制失败！',
        successText: '复制成功！'
    },
    //配置字数统计
    count: {
        countable: true,
        fontsize: '0.9em',
        color: 'rgb(90,90,90)',
        language: 'chinese'
    },
    //配置提示框
    'flexible-alerts': {
        style: 'flat'
    },
    //配置阅读进度条
    progress: {
        position: "top",
        color: "var(--theme-color,#42b983)",
        height: "3px",
    },
    //查询数据配置
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: [],
        // 支持本地化
        placeholder: '请输入要搜索的内容......',
        // 支持本地化
        noData: '找不到结果',
        // 搜索标题的最大层级, 1 - 6
        depth: 2,
        hideOtherSidebarContent: true, // 是否隐藏其他侧边栏内容
    },
}
