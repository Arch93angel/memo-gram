import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import StoriesPage from './pages/StoriesPage';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Layout/>}>
        <Route index element={<StoriesPage/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/dashboard"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
