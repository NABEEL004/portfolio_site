import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Landing />} />
          <Route path='/about' element = { <About/> }/>
          <Route path='/projects' element = { <Projects/> }/>
          <Route path='/contact' element = { <Contact/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
