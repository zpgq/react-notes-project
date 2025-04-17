// reactHooks应用
import FaAndSon from "../reacthooks/fa-and-son"
import UseEffect from "../reacthooks/use-effect"
import UseMemo from "../reacthooks/use-memo"
import UseCallback from "../reacthooks/use-callback"
import UseContext from "../reacthooks/use-context"
import UseReducer from "../reacthooks/use-reducer"
import UseRef from "../reacthooks/use-ref"
import UseState from "../reacthooks/use-state"

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
    {
        path: "/react/hooks/use/state",
        exact: true,
        component: UseState
    },
]

export default reacthooks