import React, { useState } from "react"
import { Input } from "antd"
import Son from "./Son"

//父->子  父元素传递变量给子元素, 子元素接收
//子->父  父元素传递方法给子元素, 子元素接收并调用传递过来的方法
function Test1() {
    const [inputValue, setInputValue] = useState()
    const [sonInputValue, setSonInputValue] = useState()
    const changeInput = (e) => {
        setInputValue(e.nativeEvent.data)
    }
    return (
        <div>
            <h1>父元素</h1>
            <Input placeholder="请输入值, 其值会在子元素中显示出来" onChange={changeInput} />
            子元素的内容为: <span>{sonInputValue}</span>
            <Son fInputValue={inputValue} fFun={(sonValue) => { setSonInputValue(sonValue) }} />
        </div >
    )
}

export default Test1