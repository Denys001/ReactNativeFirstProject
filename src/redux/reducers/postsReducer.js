import { Posts } from "../../api/api"

const SETLOADING = "setLoading"
const SETDATA = "setData"

const initialSatate = {
    posts: [],
    loading: false,
    amountElement: 10
}
export default postsReducer = (state = initialSatate, action) => {
    switch (action.type) {
        case SETLOADING:
            return { ...state, loading: action.value }
        case SETDATA:
            return { ...state, posts: action.data }
        default:
            return state
    }
}
export const setLoading = (value) => ({ type: SETLOADING, value })
export const setData = (data) => ({ type: SETDATA, data })
export const getPosts = (value) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        Posts.get().
            then((data) => {
                dispatch(setData(data))
                dispatch(setLoading(false))
            })
    }
}