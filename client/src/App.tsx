import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import StoriesPage from './pages/StoriesPage';
import ChatsPage from './pages/ChatPage';
import useWebSocket from './redux/useWebSocket';
// import { useSelector } from 'react-redux';
// import { RootState } from './redux/store';



function App() {
  useWebSocket(); // Initialize WebSocket connection
  // const authState = useSelector((state: RootState) => state.auth);
  // console.log("Auth State:", authState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Layout/>}>
            <Route index element={<StoriesPage/>}/>
            <Route index element={<ChatsPage/>}/>
          </Route>
        <Route path='*' element={<Navigate to="/dashboard"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
