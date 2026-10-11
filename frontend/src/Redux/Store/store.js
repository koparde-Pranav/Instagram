import {AuthReducer} from '../Auth/Reducer'
import {combineReducers, applyMiddleware, legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import {UserReducer} from '../User/Reducer'
import {PostReducer} from '../Post/Reducer'
import {CommentReducer} from '../Comment/Reducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    post: PostReducer,
    comment: CommentReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));