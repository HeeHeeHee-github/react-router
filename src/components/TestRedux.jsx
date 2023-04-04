import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TestRedux() {
  // useSelector
  // 값을 꺼내오기만 하는 애
  const weight = useSelector((state) => state.weightReducer)
  const dispatch = useDispatch()

  return (
    <>
      <h1>당신의 몸무게는 {weight}kg 입니다!</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' })
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' })
        }}
      >
        감소
      </button>
    </>
  )
}
