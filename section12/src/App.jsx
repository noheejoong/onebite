import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Button from './components/Button'
import Header from './components/Header'

function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
    <Header title={'title'} leftChild={<Button text={'left'} />} rightChild={<Button text={'right'} />}></Header>
    <Button text={'123'} onClick={()=>{console.log("123번 버튼 클릭!")}}/>
    <Button text={'123'} type={"POSITIVE"} onClick={()=>{console.log("123번 버튼 클릭!")}}/>
    <Button text={'123'} type={"NEGATIVE"} onClick={()=>{console.log("123번 버튼 클릭!")}}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
