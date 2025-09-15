import React from 'react';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectsPage from './pages/projects-page';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
   <HashRouter>
  <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-page" element={<ProjectsPage />} />
      </Routes>
   </HashRouter>
  );
}

export default App;
