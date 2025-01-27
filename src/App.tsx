
import './App.css'
import MyContainer from './components/MyContainer'
import About from './components/About'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Header />
            <MyContainer />
          </>} />
          <Route path='/about' element={<>
            <Header />
            <About />
          </>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
