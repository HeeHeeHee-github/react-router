import React from 'react'
import styled from 'styled-components'
import YellowButton from './YellowButton'
import { useSelector } from 'react-redux'

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey)
  return <></>
}
