import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
import NotFound from '../pages/notFound'


function Router() {
  return (
    <>
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </React.Suspense>
    </>
  )
}

export default Router