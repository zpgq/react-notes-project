import React, { } from "react"
function ChildComponent({ value }) {
    // const value = useMemo(() => { }, [value])
    return (
        <>
            <p>从父函数传过来的值为{value}</p>
            {console.log("子函数重新渲染")}
        </>
    )
}

export default React.memo(ChildComponent)