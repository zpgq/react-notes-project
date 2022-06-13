// 页面
import Login from "@/modules/page/Login"
import Export from "@/modules/page/Export"

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

export default page