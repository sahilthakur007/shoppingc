
import './App.css';
import { Routes, Route } from "react-router-dom"
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Navbar from "./components/navbar"
import Cart from './components/Cart';
import About from './components/aboutus';
import { useState } from 'react';
function App() {
  const [userInfo ,setuserInfo]= useState(false)
  return (
    <div className="App">
      {/* <Navbar userInfo={userInfo} setuserInfo={setuserInfo}/> */}
      <Routes>
        <Route path="/signUp" element={<SignUp setuserInfo={setuserInfo} /> } />
        <Route path="/signIn" element={<SignIn setuserInfo={setuserInfo} />} />
        <Route path="/cart" element={<Cart userInfo={userInfo} />}/>
        <Route path ="/aboutus" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
