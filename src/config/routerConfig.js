import Test from "@/modules/Test"
//reactHooks应用
import FaAndSon from "@/modules/reacthooks/FaAndSon"
import UseEffect from "@/modules/reacthooks/UseEffect"
import UseMemo from "@/modules/reacthooks/UseMemo"
import UseCallback from "@/modules/reacthooks/UseCallback"
import UseContext from "@/modules/reacthooks/UseContext"
import UseReducer from "@/modules/reacthooks/UseReducer"
import UseRef from "@/modules/reacthooks/UseRef"
//路由
import Routes from "@/modules/ReactRoutes"
//antd
import Btn from "@/modules/antd/Btn"
import Card from "@/modules/antd/Card"
//example案例
import TableDel from "@/modules/example/TableDel"
//htmlcss问题
import ChildSelector from "@/modules/htmlcss/ChildSelector"
//js问题
import Func from "@/modules/js/Func"
import Events from "@/modules/js/Events"
import Prototype from "@/modules/js/Prototype"
//页面
import Login from "@/modules/page/Login"
import Export from "@/modules/page/Export"


//reactHooks应用
const reactHooks = [
    {
        path: "/react/hooks/faandson",
        exact: true,
        component: FaAndSon
    },
    {
        path: "/react/hooks/use/effect",
        exact: true,
        component: UseEffect
    },
    {
        path: "/react/hooks/use/memo",
        exact: true,
        component: UseMemo
    },
    {
        path: "/react/hooks/use/callback",
        exact: true,
        component: UseCallback
    },
    {
        path: "/react/hooks/use/context",
        exact: true,
        component: UseContext
    },
    {
        path: "/react/hooks/use/reducer",
        exact: true,
        component: UseReducer
    },
    {
        path: "/react/hooks/use/ref",
        exact: true,
        component: UseRef
    },
]
//路由
const reactRoutes = [
    {
        path: "/react/routes",
        // exact: true,
        component: Routes
    }
]
//antd组件
const antd = [
    {

        path: "/antd/btn",
        exact: true,
        component: Btn,
    },
    {
        path: "/antd/card",
        exact: true,
        component: Card,
    }
]
//案例
const example = [
    {
        path: "/case/table/del",
        exact: true,
        component: TableDel,
    }
]
//htmlcss问题
const htnlcss = [
    {
        path: "/htmlcss/css/childselector",
        exact: true,
        component: ChildSelector
    }
]
//js问题
const js = [
    {
        path: "/js/func",
        exact: true,
        component: Func
    },
    {
        path: "/js/events",
        exact: true,
        component: Events
    },
    {
        path: "/js/protorype",
        exact: true,
        component: Prototype
    }
]
//页面
const page = [
    {

        path: "/page/home",
        exact: true,
        component: Login,
    },
    {
        path: "/page/export",
        export: true,
        component: Export
    }
]


const routerConfig = [
    {
        path: "/",
        exact: true,
        component: Test,
    },
    ...reactHooks,
    ...reactRoutes,
    ...antd,
    ...example,
    ...htnlcss,
    ...js,
    ...page,
]

export default routerConfig