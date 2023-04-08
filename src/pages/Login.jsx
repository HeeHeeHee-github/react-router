import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../store/modules/user'
import axios from 'axios'

export default function Login() {
  const registerIdInput = useRef()
  const registerPwInput = useRef()

  const dispatch = useDispatch()

  const registerUser = async () => {
    // 둘 중에 하나라도 입력이 되지 않으면 바로 alert 창 띄우기
    if (!registerIdInput.current.value || !registerPwInput.current.value)
      return alert('필수 값을 입력해주세요')

    //axios 버전
    const resRegister = await axios.post(
      'http://localhost:4000/user/register',
      {
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      },
    )

    if (resRegister.status !== 200) return alert(resRegister.data)

    alert(resRegister.data)
    dispatch(
      login({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      }),
    )

    // fetch 버전 위엔 axios 버전
    // 아래 주소로 보내기
    // 옵션 보내기 ?
    // const resRegister = await fetch('http://localhost:4000/user/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // json 형태로 변경해서 body에 담아 보내기(?)
    //   body: JSON.stringify({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // })
    // 200이 아니면 문제가 있다는 것
    // if (resRegister.status !== 200) return alert(await resRegister.json())

    // alert(await resRegister.json())
    // dispatch(
    //   login({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // )
  }
  return (
    <>
      {/* 로그인 파트 */}
      <h1>로그인 파트입니다</h1>
      아이디 : <input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>로그인</button> <Link to="">카카오 로그인</Link>
      <br />
      <br />
      {/* 회원가입 파트 */}
      <h1>회원가입 파트입니다</h1>
      아이디 : <input type="text" ref={registerIdInput} />
      <br />
      <br />
      비밀번호 : <input type="password" ref={registerPwInput} />
      <br />
      <br />
      <button onClick={registerUser}>회원가입</button>
    </>
  )
}
