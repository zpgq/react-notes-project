// reactHooks应用
import FaAndSon from "@/modules/reacthooks/FaAndSon"
import UseEffect from "@/modules/reacthooks/UseEffect"
import UseMemo from "@/modules/reacthooks/UseMemo"
import UseCallback from "@/modules/reacthooks/UseCallback"
import UseContext from "@/modules/reacthooks/UseContext"
import UseReducer from "@/modules/reacthooks/UseReducer"
import UseRef from "@/modules/reacthooks/UseRef"

//reactHooks应用
const reacthooks = [
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

export default reacthooks