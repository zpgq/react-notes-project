// antd
import MyButton from "@/modules/antd/my-button"
import MyCard from "@/modules/antd/my-card"
import MyForm from "@/modules/antd/my-form"
import MyTable from "@/modules/antd/my-table"

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