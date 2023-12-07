//example案例
import TableDel from "./table-del"
import SelectRef from './select-ref'
import Redux from './redux'
import CountDown from './countdown'
//案例
const example = [
    {
        path: "/case/table/del",
        exact: true,
        component: TableDel,
    },
    {
        path: "/case/select-ref",
        exact: true,
        component: SelectRef,
    },
    {
        path: "/case/redux",
        exact: true,
        component: Redux,
    },
    {
        path: "/case/countdown",
        exact: true,
        component: CountDown,
    }
]

export default example