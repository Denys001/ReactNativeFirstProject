const INCREMENT = "INCREAMENT"
const RESET = "RESET"

const initialSate = {
    clicks: 0
}

export default clickReducer = (state = initialSate, action) => {
    switch (action.type) {
        case INCREMENT: {
            const newState = { ...state, clicks: ++state.clicks }
            return newState
        }
        case RESET: {
            const newState = { ...state, clicks: 0 }
            return newState
        }
        default:
            return state
    }
}

export const increment = () => ({
    type: INCREMENT,
})
export const reset = () => ({
    type: RESET,
})