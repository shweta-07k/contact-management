import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App