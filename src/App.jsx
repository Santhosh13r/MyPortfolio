
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {

  return (
    <>

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
