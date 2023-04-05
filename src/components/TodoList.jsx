import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, done } from '../store/modules/todo'

export default function TodoList() {
  // 배열한테 필터를 걸어줌
  const todoList = useSelector((state) => state.todo.todoList).filter(
    (el) => el.done === false, // false인 애만 배열로 다시 넘겨줌 (리턴)
  )
  const nextID = useSelector((state) => state.todo.nextID)
  const dispatch = useDispatch()
  const inputRef = useRef()

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }))
            inputRef.current.value = ''
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {/* todoList 배열 안에 있는 id 값을 key 값으로 */}
        {todoList.map((el) => (
          <li key={el.id}>
            {el.text}
            <button onClick={() => dispatch(done(el.id))}>완료</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
