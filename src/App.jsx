import React from 'react'
import Navbar from './Components/LayOuts/Navbar'
import FooterSection from './Components/LayOuts/FooterSection'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import AboutPage from './Pages/AboutPage'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App
