// antd
import MyButton from "@/modules/antd/my-button"
import MyCard from "@/modules/antd/my-card"

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
    }
]

export default antd