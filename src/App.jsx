import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';
import Service from './components/Services/Service';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimoniels/Testimonials';
import Clients from './components/Clients/Clients';
import News from './components/News/News';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='app' >
      <NavBar/>
      <Hero/>
      <Welcome/>
      <Service/>
      <Stats/>
      <Testimonials/>
      <Clients/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App