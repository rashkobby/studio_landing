import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import GalleryDetail from './Components/Gallery/GalleryDetail';
import About from './Pages/About';


function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Home/>} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/gallery/:service" element={<GalleryDetail/>} />
      </Routes>
  )
}

export default App
