import { useReducer } from "react"

function UseReducer() {
    const [state, dispatch] = useReducer((count, action) => {
        switch (action) {
            case "add":
                return count + 1;
            case "reduce":
                return count - 1;
            default:
                break;
        }
    }, 1)
    return (
        <>
            <p>count的值为: {state}</p>
            <button onClick={() => { dispatch("add") }}>点击+1</button>
            <button onClick={() => { dispatch("reduce") }}>点击-1</button>
        </>
    )
}

export default UseReducer