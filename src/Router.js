import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile'
import Board from './components/Board'
import Header from './components/Header'
import NotFound from './components/NotFound'
import BoardDetail from './components/BoardDetail'
import TestRedux from './components/TestRedux'
import Home from './components/Home'
import ListContainer from './components/ListContainer'

function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* 라우팅 룰을 Routes 아래에 적기 */}
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestRedux />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  )
}

export default App
