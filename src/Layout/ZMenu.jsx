
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Menu } from "antd"
import menuConfig from "@/config/menu-config"

//递归menu函数
const randItem = (menuData) => {
    if (menuData && menuData.length > 0) {
        return menuData.map(item => {
            if (item.children && item.children.length > 0) {
                return (<Menu.SubMenu key={item.key} title={item.menuName}>
                    {randItem(item.children)}
                </Menu.SubMenu>)
            }
            return (<Menu.Item key={item.key}>
                <Link to={item.key}>{item.menuName}</Link>
            </Menu.Item>)
        })
    }
}
function UserMnu() {
    //兼容undefined 使用|| []
    return (
        <Fragment>
            {/* 普通法menu */}
            {/* <Menu
                mode="horizontal"
            >
                {
                    menuConfig.map((item) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <Menu.SubMenu key={item.key} title={item.menuName}>
                                    {
                                        item.children.map(item => <Menu.Item key={item.key}>{item.menuName}</Menu.Item>)
                                    }
                                </Menu.SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={item.key}>
                                    {item.menuName}
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu> */}
            {/* 递归法menu */}
            <Menu
                mode="horizontal"
            >
                {randItem(menuConfig)}
            </Menu>
        </Fragment>
    )
}

export default UserMnu