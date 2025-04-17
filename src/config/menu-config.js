import reacthooks from '../pages/reacthooks/menus'
import reactClass from '../pages/react-class/menus'
import antd from '../pages/antd/menus'
import example from '../pages/example/menus'
import htmlcss from '../pages/htmlcss/menus'
import js from '../pages/js/menus'

const menuConfig = [
    {
        key: "/",
        menuName: "测试",
        children: []
    },
    reacthooks,
    reactClass,
    antd,
    example,
    htmlcss,
    js,
]

export default menuConfig