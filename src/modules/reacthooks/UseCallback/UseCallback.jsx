import React, { useState } from "react"
import ChildComponent from "./ChildComponent"
function UseCallback() {
    /**
     * 使用callback后， 当依赖发生改变时才重新声明函数
     * 使用普通函数, 每次setState就会重新声明函数
     *  */
    const [count, setCount] = useState(0)

    return (
        <>
            <p>父元素的count值为： {count}</p>
            <button onClick={() => { setCount(count + 1) }}>count + 1</button>
            <ChildComponent  count={count}/>
        </>
    )
}

export default UseCallback