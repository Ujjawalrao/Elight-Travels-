import React, { useCallback, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContactButtons from './components/FloatingContactButtons'
import EnquiryButton from './components/EnquiryButton'
import EnquiryModal from './components/EnquiryModal'
import Router from './routers/Router.jsx'

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const enquiryButtonRef = useRef(null)
  const closeEnquiry = useCallback(() => setEnquiryOpen(false), [])

  return (
    <React.Fragment>
      <Navbar />
      <Router />
      <Footer />
      <FloatingContactButtons />
      <EnquiryButton
        ref={enquiryButtonRef}
        onClick={() => setEnquiryOpen(true)}
        isOpen={enquiryOpen}
      />
      {enquiryOpen && (
        <EnquiryModal onClose={closeEnquiry} triggerRef={enquiryButtonRef} />
      )}
    </React.Fragment>
  )
}

export default App