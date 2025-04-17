// antd
import MyButton from "../antd/my-button"
import MyCard from "../antd/my-card"
import MyForm from "../antd/my-form"
import MyTable from "../antd/my-table"

//antd组件
const antd = [
    {
        path: "/antd/my-button",
        exact: true,
        component: MyButton,
    },
    {
        path: "/antd/my-card",
        exact: true,
        component: MyCard,
    },
    {
        path: "/antd/my-form",
        exact: true,
        component: MyForm,
    },
    {
        path: "/antd/my-table",
        exact: true,
        component: MyTable,
    }
]

export default antd