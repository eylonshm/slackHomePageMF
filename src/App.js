import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const helloWorld = () => <div>Hello World!</div>
const helloReact = () => <div>Hello React!</div>

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='react' element={<>React route</>} />
          <Route path='/' element={<>Root route</>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
