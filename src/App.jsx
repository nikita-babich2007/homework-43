import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'

function App() {
  return (
    
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
