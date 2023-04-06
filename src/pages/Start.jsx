import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PinkButton from '../components/PinkButton'
import { useDispatch } from 'react-redux'
import { init, next } from '../store/modules/mbti'

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
  const [counts, setCounts] = useState(0)

  const dispatch = useDispatch()

  // 데이터 받을 게 없으니
  // 주소만 잘 보내면 됨
  async function fetchData() {
    // mbti 데이터 받아오는 코드
    const resMbtiData = await fetch('http://localhost:4000/data/getData')
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json()
      if (mbtiData[0]) dispatch(init(mbtiData[0]))
      console.log(mbtiData)
    } else {
      console.log(await resMbtiData.json())
    }

    // 방문자 수 받아오는 코드
    // 아래 주소로 요청

    const resGetCounts = await fetch('http://localhost:4000/data/getCount')
    // 200은 통신 성공이란 뜻
    if (resGetCounts.status === 200) {
      const countData = await resGetCounts.json()
      setCounts((cur) => countData.counts)
      console.log(countData)
    } else {
      console.log(await resGetCounts.json())
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="MBTI 메인" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다!{'\n\n'}
        현재까지 {counts}명이 참여했습니다.
      </SubHeader>
      <PinkButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  )
}
