
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { obtenerProductos } from './services/productService'

function App() {
  console.log("Estoy ");
  obtenerProductos();

  return (
    <BrowserRouter>
      <Header />
      <Routes >
          <Route path='/' element={<h1>EComm</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
