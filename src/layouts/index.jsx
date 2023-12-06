import React, { useState } from "react";
import { Button } from "antd";
import Menu from "./menu";
import Router from "../router";

function Layout() {
  const [menuIsShow, setMenuIsShow] = useState(true);
  const [controlBtnText, setControlBtnText] = useState("隐藏");
  const handleMenuShow = () => {
    if (menuIsShow === true) {
      setMenuIsShow(false);
      setControlBtnText("显示");
    } else {
      setMenuIsShow(true);
      setControlBtnText("隐藏");
    }
  };
  return (
    <div className="z-layout">
      {menuIsShow ? <Menu /> : null}
      <Router />
      <Button
        type="primary"
        style={{ position: "fixed", right: 20, bottom: 20 }}
        onClick={handleMenuShow}
      >
        {controlBtnText}菜单
      </Button>
    </div>
  );
}
export default Layout;
