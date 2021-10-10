import React, { } from "react"
import { Input } from "antd"

function Son({ fInputValue, fFun }) {
    const changeInput = (e) => {
        fFun(e.nativeEvent.data)
    }
    return (
        <div>
            <h1>子元素</h1>
            <Input placeholder="请输入值, 其值会在父元素中显示" onChange={changeInput} />
            父元素的内容为: <span>{fInputValue}</span>
        </div>
    )
}

export default Son