import { CHANGE_INPUT, ADD_ITEM } from '../constant'

const defaultState = {
    inputValue: '初始值111',
    list: []
}

const reducer = (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = {...state}
        newState.inputValue = action.value;
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = {...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    return state
}

export default reducer