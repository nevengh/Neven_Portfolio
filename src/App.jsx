
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Resum from './pages/Resum/Resum'
import Portfolio from './pages/Portfolio/Portfolio'
import ContactUs from './pages/ContactUs/ContactUs'
import ServicesPage from './pages/ServicesPage/ServicesPage'

function App() {


  return (
    <BrowserRouter basename="/Neven_Portfolio">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resum/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
