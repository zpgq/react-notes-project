// class类组件
import Lifycycle from './Lifycycle/index.jsx'
import Ref from './Ref/index.jsx'

const routers = [
    {
        path: "/react/class/lifycycle",
        exact: true,
        component: Lifycycle
    },
    {
        path: "/react/class/ref",
        exact: true,
        component: Ref
    }
]

export default routers