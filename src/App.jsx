import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Myprojects from './components/myprojects/Myprojects'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'


const App = () => {
  return (
    
    <main className="text-gray-400 bg-gray-900 body-font">
        <Nav/>
        <Header/>
        <About/>
        <Myprojects/>
        {/* <Contact/> */}
        {/* <Footer/> */}
    </main>
  )
}

export default App