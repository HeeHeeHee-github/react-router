import { combineReducers } from 'redux'
import todo from './modules/todo'
import weightReducer from './modules/weight'

// 인자로 넣어주면 합쳐짐
// 하나로 합치고 -> 빼는 거임
export default combineReducers({ todo, weightReducer })
