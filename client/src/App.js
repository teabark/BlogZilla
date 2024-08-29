import React, {Fragment, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Register from './pages/Register'
import Read from "./pages/Read"
import Sports from './pages/Features/Sports';
import Business from './pages/Features/Business';
import Technology from './pages/Features/Technology';
import Politics from './pages/Features/Politics';
import Activity from './pages/Activity';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function setAuth (boolean){
    setIsAuthenticated(boolean);
  }

  async function isAuth(){
    try{
      const response = await fetch("http://localhost:5000/auth/is-verify",{
        method: "GET",
        headers: {token: localStorage.token}
      })
      const parseResponse = await response.json();
      parseResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    isAuth()
  });

  return (
    <Fragment>
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={isAuthenticated ? <Navigate to = "/dashboard"/> : <Signin setAuth={setAuth}/>} />
          <Route path="/register" element={isAuthenticated? <Navigate to = "/dashboard"/> : <Register setAuth={setAuth}/> } />
          <Route path="/dashboard" element={isAuthenticated? <Dashboard setAuth={setAuth}/> : <Navigate to ="/login"/>} />
          <Route path="/sports" element={isAuthenticated? <Sports setAuth={setAuth}/> : <Navigate to ="/login"/>}/>
          <Route path="/business" element={isAuthenticated? <Business setAuth={setAuth}/> : <Navigate to ="/login"/>}/>
          <Route path="/technology" element={isAuthenticated? <Technology setAuth={setAuth}/> : <Navigate to ="/login"/>}/>
          <Route path="/politics" element={isAuthenticated? <Politics setAuth={setAuth}/> : <Navigate to ="/login"/>}/>
          <Route path="/read/:id" element={isAuthenticated? <Read setAuth={setAuth}/> : <Navigate to ="/login"/>} />
          <Route path="/activity/:id" element={isAuthenticated? <Activity setAuth={setAuth}/> : <Navigate to ="/login"/>}/>
          <Route path="/create/:id" element={isAuthenticated? <Create/> : <Navigate to ="/login"/>}/>
          <Route path="/edit/:id" element={isAuthenticated? <Edit/> : <Navigate to = "/login"/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  </Fragment>
  );
}

export default App;
