const menuConfig = [
    {
        key: "/",
        menuName: "测试",
        children: []
    },
    {
        key: "/react/hooks",
        menuName: "reactHooks应用",
        children: [
            {
                key: "/react/hooks/faandson",
                menuName: "父子组件传值"
            },
            {
                key: "/react/hooks/use/effect",
                menuName: "useEffect的使用"
            },
            {
                key: "/react/hooks/use/memo",
                menuName: "useMemo的使用"
            },
            {
                key: "/react/hooks/use/callback",
                menuName: "useCallback的使用"
            },
            {
                key: "/react/hooks/use/context",
                menuName: "useContext的使用"
            },
            {
                key: "/react/hooks/use/reducer",
                menuName: "useReducer的使用"
            },
            {
                key: "/react/hooks/use/ref",
                menuName: "useRef的使用"
            }
        ]
    },
    {
        key: "/react/routes",
        menuName: "路由"
    },
    {
        key: "/antd",
        menuName: "antd组件",
        children: [
            {
                key: "/antd/btn",
                menuName: "btn组件"
            },
            {
                key: "/antd/card",
                menuName: "card组件"
            }
        ]
    },
    {
        key: "/case",
        menuName: "案例",
        children: [
            {
                key: "/case/table/del",
                menuName: "表单删除功能"
            },
        ]
    },
    {
        key: "/htmlcss",
        menuName: "html和css问题",
        children: [
            {
                key: "/htmlcss/css/childselector",
                menuName: "子选择器问题"
            }
        ]
    },
    {
        key: "/js",
        menuName: "js问题",
        children: [
            {
                key: "/js/func",
                menuName: "函数被创建到执行所发生的事情"
            },
            {
                key: "/js/events",
                menuName: "事件代理及捕获冒泡"
            },
            {
                key: "/js/protorype",
                menuName: "原型及其继承"
            }
        ]
    },
    {
        key: "/page",
        menuName: "页面",
        children: [
            {
                key: "/page/home",
                menuName: "主页"
            },
            {
                key: "/page/export",
                menuName: "导出页面"
            }
        ]
    }
]

export default menuConfig