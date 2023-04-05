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
  buyList: ['닌텐도', '자동차'],
  toDoListCount: 3,
}

// id 값 생성을 위해!
let counts = initState.todoList.length
initState['nextID'] = counts

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
        ...state, // 얘는 꼭 필요함. 만약 없다면, 무언가를 추가 했을 때 다른 state? 다 사라짐
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        //
        nextID: action.payload.id + 1,
      }
    case DONE:
      return {
        ...state,
        // todoList 얘만 건들겠다는 의미로 얘만 써줌
        todoList: state.todoList.map((el) => {
          // 배열 안에 있는 id 값과 외부 컴포넌트에서 가져온 id 값과 비교
          if (el.id === action.id) {
            return {
              // id, text, done이 있는 객체
              // 전개구문 사용
              // 그럼 id랑 text는 그대로 리턴!
              // done만 true로 바뀜
              ...el,
              done: true,
            }
          } else {
            return el
          }
        }),
      }
    default:
      return state
  }
}
