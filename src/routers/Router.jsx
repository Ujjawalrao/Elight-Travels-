import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Gallery from '../pages/Gallery.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'


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