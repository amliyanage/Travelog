import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Footer from './components/footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);


  return (
    <>
      <NavBar /> 
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
