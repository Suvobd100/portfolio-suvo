// import {Home} from './pages/Home'
// import './App.css'
// import { Navbar } from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'





function App() {
 
  return (
   <>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<h1>Hello from route</h1>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
