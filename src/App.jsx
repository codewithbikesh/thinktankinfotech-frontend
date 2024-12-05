import './App.css'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Our_Team from './pages/Our-Team/Our_Team'
import Services from './pages/Services/Services'
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
function App() {
  // const images = [
  //   '<https://via.placeholder.com/800x400.png?text=Slide+1>',
  //   '<https://via.placeholder.com/800x400.png?text=Slide+3>',
  // ];
  const images = Array.from({ length: 5 }, () => `https://picsum.photos/800/400?random=${Math.random()}`);

  return (
    <>
    <div>
      <Navbar />      
        <Routes>
        <Route path='/' element={
          <>
        <Carousel  images={images} autoSlide={true} autoSlideInterval={4000}/>
        <Home/>
          </>
       
        }></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
        <Route path='/our-teams' element={<Our_Team/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
