import { combineReducers } from 'redux'
import todo from './modules/todo'
import weight from './modules/weight'
import mbti from './modules/mbti'

// 인자로 넣어주면 합쳐짐
// 하나로 합치고 -> 빼는 거임
export default combineReducers({ todo, weight, mbti })
