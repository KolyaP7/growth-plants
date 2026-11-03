import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomePage from './pages/HomePage.tsx'
import ContactsPage from './pages/ContactsPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import ShopPage from './pages/ShopPage.tsx'
import LoginPage from './pages/LoginPage.tsx'

import { Route, Routes } from 'react-router'

function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
    
  )
}

export default App
