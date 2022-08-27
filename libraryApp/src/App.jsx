import React from 'react';
import {BrowserRouter,Route, Routes,Link} from 'react-router-dom';
import Index from '../pages';
import Create from '../pages/create';
import View from '../pages/view';
import Store from '../store/store.jsx';
import './App.css';

function App() {

  return (
    <div>
      <Store>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='create' element={<Create />} />
        <Route path='view/:itemId' element={<View  />} />


      </Routes>
      </BrowserRouter>
      </Store>
    </div>
   
  )
}

export default App
