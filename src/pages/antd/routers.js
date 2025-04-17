// antd
import MyButton from "@/pages/antd/my-button"
import MyCard from "@/pages/antd/my-card"
import MyForm from "@/pages/antd/my-form"
import MyTable from "@/pages/antd/my-table"

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