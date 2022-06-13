import reacthooks from '../modules/reacthooks/menus'
import reactClass from '../modules/react-class/menus'
import antd from '../modules/antd/menus'
import example from '../modules/example/menus'
import htmlcss from '../modules/htmlcss/menus'
import js from '../modules/js/menus'
import page from '../modules/page/menus'


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
    page,
]

export default menuConfig