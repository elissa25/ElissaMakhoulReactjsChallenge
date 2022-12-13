import React from "react";
import { Routes ,Route } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import DashboardPage from './screens/DashboardPage';
import NotFound from "./screens/NotFound";

function App() {
  return (
   <Routes>
        <Route path='/' element={<LoginPage/>} exact/>
        <Route path='/dashboard' element={<DashboardPage/>} />
       <Route path='*'  element={<NotFound/>}/> 
   </Routes>
    );
}

export default App;
