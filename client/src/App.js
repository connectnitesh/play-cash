import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from './components/Header'
import Events from './components/Events'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsandCondition from './components/TermsandCondition'
import Faq from './components/Faq';
import IdeaGenerator from './components/IdeaGenerator';

const App = () => {
  return (

    <>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Header />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="privacy" element={<PrivacyPolicy />}/>
        <Route path="terms" element={<TermsandCondition />}/>
        <Route path="faq" element={<Faq />}/>
        <Route path="idea-generator" element={<IdeaGenerator />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App