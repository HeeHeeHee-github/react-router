import React from 'react'
import styled from 'styled-components'
import PinkButton from '../components/PinkButton'
import { useDispatch } from 'react-redux'
import { next } from '../store/modules/mbti'

const MainImg = styled.img`
  width: inherit;
`
const Header = styled.p`
  font-size: 3em;
`
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`

export default function Start() {
  const dispatch = useDispatch()
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다!
      </SubHeader>
      <PinkButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  )
}
