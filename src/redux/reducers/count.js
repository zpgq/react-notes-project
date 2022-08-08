const initState = {
    value: 0
}

export default function countReducer(preState = initState, action) {
    const { type, data} = action
    switch (type) {
        case 'add':
            return preState += data
        default:
            return preState
    }
}