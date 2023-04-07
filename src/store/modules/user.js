// 초기 상태
const initState = {
  userID: '',
  userPW: '',
  isLogin: false, // true면 바로 mbti 뜸
}

// 액션 타입 설정
const LOGIN = 'user/LOGIN'
const LOGOUT = 'user/LOGOUT'

// 액션 생성 함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  }
}
export function logout() {
  return {
    type: LOGOUT,
  }
}

// 리듀서 일해라
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password, // 원래 비밀번호는 이렇게 넣으면 안됨!
        isLogin: true,
      }
    case LOGOUT:
      return {
        ...state,
        // 아이디 비밀번호 빈 문자열로 초기화
        userID: '',
        userPW: '',
        isLogin: false,
      }
    default:
      return state
  }
}
