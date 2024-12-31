import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feedbackdashboard from './components/Feedbackdashboard'
import Addfeedback from './components/Addfeedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Feedbackdashboard/>}></Route>
      <Route path='/add' element={<Addfeedback/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
