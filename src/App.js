import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
