import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';




document.body.style.backgroundColor='#110b18';
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>

        </Routes>
      </Router>

    
    </>
  );
}

export default App;
