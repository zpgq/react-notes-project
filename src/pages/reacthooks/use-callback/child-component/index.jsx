import { useEffect } from "react"

function ChildComponent() {
    useEffect(() => {
    }, [])
    return (
        <>
            <p>子元素</p>
        </>
    )
}

export default ChildComponent