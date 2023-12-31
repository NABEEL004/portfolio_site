import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className='bg-[#FDFAE3] top-0 left-0 w-full h-full sticky min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Landing />} />
          <Route path='/landing' element = { <Landing/> }/>
          <Route path='/about' element = { <About/> }/>
          <Route path='/projects' element = { <Projects/> }/>
          <Route path='/contact' element = { <Contact/> }/>
          <Route path='/*' element = { <NoPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
