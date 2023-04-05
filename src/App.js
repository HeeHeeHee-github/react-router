import React from 'react'
import Start from './pages/Start'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import { useSelector } from 'react-redux'
import Mbti from './components/Mbti'

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
  return (
    <div className="App">
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </div>
  )
}

export default App
