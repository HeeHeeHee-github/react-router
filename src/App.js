import React from 'react'
import Start from './pages/Start'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import { useSelector } from 'react-redux'
// import Mbti from './components/Mbti'
import Show from './pages/Show'
import Mbti from './pages/Mbti'

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`

function App() {
  const page = useSelector((state) => state.mbti.page)
  const survey = useSelector((state) => state.mbti.survey)
  return (
    <div className="App">
      <GlobalStyle />
      <Main>
        {page === 0 ? <Start /> : page <= survey.length ? <Mbti /> : <Show />}
      </Main>
    </div>
  )
}

export default App
