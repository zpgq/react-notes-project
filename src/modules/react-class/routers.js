// class类组件
import Lifycycle from './Lifycycle/index.jsx'
import Ref from './Ref/index.jsx'
import Context from './Context/index.jsx'

const routers = [
    {
        path: "/react/class/lifycycle/:id",
        exact: true,
        component: Lifycycle
    },
    {
        path: "/react/class/ref",
        exact: true,
        component: Ref
    },
    {
        path: "/react/class/context",
        exact: true,
        component: Context
    },
]

export default routers