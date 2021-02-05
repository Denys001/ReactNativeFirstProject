import { applyMiddleware, combineReducers, createStore } from 'redux'
import clickReducer from './reducers/clickReducer'
import dataReducer from './reducers/dataReducer'
import postsReducer from './reducers/postsReducer'
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    clicks: clickReducer,
    data: dataReducer,
    posts: postsReducer,
    form: formReducer
})

export default store = createStore(reducers, applyMiddleware(thunkMiddleware))