import { useEffect, useRef } from "react"

function UseRef() {
    const refNode = useRef()
    useEffect(() => {
        console.log(refNode.current)
    }, [])
    return (
        <>
            <p ref={refNode}>useref</p>
            {/* <p ref={useRef()}></p> */}
        </>
    )
}

export default UseRef