const ENTER = "ENTER"
const ADD = "ADD"

const initialState = {
    current: '',
    data: []
}
export default dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER:
            return { ...state, current: action.text }
        case ADD:
            if (state.current.trim() === '')
                return state
            return { ...state, data: [...state.data, { el: state.current, id: Date.now().toString() }], current: '' }
        default:
            return state
    }
}

export const enterText = (text) => ({
    type: ENTER,
    text
})
export const addNewElement = () => ({
    type: ADD
})