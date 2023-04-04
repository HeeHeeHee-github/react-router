const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '허리 펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
}

// 다른 store에서도 CREATE, DONE이 있을 수도 있으니
// 구분하기 위해서 앞에 todo를 붙힘
const CREATE = 'todo/CREATE'
const DONE = 'todo/DONE'

export function create(payload) {
  return {
    type: CREATE,
    payload, // payload: payload 와 같은 의미. 단축해서 쓴 거임
  }
}

export function done(id) {
  return {
    type: DONE,
    id,
  }
}

// Action Type에 따라 작동하는 Reducer를 구현
// 리듀서 설정 (실제 작업은 이 친구가 함)
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      }
    case DONE:
      return console.log('DONE 호출')
    default:
      return state
  }
}
