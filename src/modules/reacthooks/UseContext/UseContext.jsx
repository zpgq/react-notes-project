import React, { createContext, useState } from "react"
import ChildComponent from "./ChildComponent"
export const CountContext = createContext();

function UseContext() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>count数: {count}</p>
            <button onClick={() => { setCount(count + 1) }}>点击加1</button>
            <CountContext.Provider value={count}>
                <ChildComponent />
            </CountContext.Provider>
        </div>
    )
}




export default UseContext