import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const HelloWorld = () => <div>Hello World!</div>
const HelloReact = () => <div>Hello React!</div>

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='react' element={<HelloReact />} />
          <Route path='/' element={<HelloWorld />} />
        </Routes>
        <Link to='/react'>Say hello to React!</Link>
        <br />
        <Link to='/'>Say hello to the World!</Link>
      </BrowserRouter>
    </div>
  )
}

export default App
