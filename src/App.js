
import Navbar from './Compenents/navbar'
import Home from './Compenents/home'
import AddVideo from './Compenents/addVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Compenents/pageNotFound';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AddVideo/>} path='/add-Video'/>
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
     </BrowserRouter>
    </div>

    
  );
}

export default App;
