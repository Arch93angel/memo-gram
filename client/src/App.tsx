import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Layout/>}>
        </Route>
        <Route path='*' element={<Navigate to="/dashboard"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
