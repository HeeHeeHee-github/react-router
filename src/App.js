import React from 'react'
import Start from './pages/Start'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  const isLogin = useSelector((state) => state.user.isLogin)

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App
