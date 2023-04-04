const weight = 100
const now = new Date()
const month = now.getMonth() + 1
const day = now.getDate()

// action 이라는 인자를 더 받음 + 추가
// action - 객체로 전달
export default function weightReducer(state = weight, action) {
  if (action.type === '증가') {
    state += day
    return state
  } else if (action.type === '감소') {
    state -= month
    return state
  } else {
    return state
  }
}

// state 값이 변경될 수도 있으니 let으로 선언
// let store = createStore(reducer)
