import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './Pages/Loading'
import Detail from './Pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
