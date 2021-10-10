import React, { useState } from 'react'
import { Button } from "antd"
import ZMenu from "./ZMenu"
import ZRoute from "./ZRoute"

function Layout() {
    const [menuIsShow, setMenuIsShow] = useState(true)
    const [controlBtnText, setControlBtnText] = useState("隐藏")
    const handleMenuShow = () => {
        if (menuIsShow === true) {
            setMenuIsShow(false)
            setControlBtnText("显示")
        } else {
            setMenuIsShow(true)
            setControlBtnText("隐藏")
        }
    }
    return (
        <div className="z-layout">
            {menuIsShow ? <ZMenu /> : null}
            <ZRoute />
            <Button type="primary" style={{ position: "fixed", right: 20, bottom: 20 }} onClick={handleMenuShow}>
                {controlBtnText}菜单
            </Button>
        </div>
    )
}
export default Layout