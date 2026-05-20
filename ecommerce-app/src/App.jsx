import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>

      </Routes>
    </div>
  )
}

export default App
