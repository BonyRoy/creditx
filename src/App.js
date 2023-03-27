import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar";
import View from "./View";
import Chatbox from "./Chatbox";
import { Routes ,Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/View" element={<View/>}/>
            <Route path="/Chatbox" element={<Chatbox/>}/>
        </Routes>
        </>
        );
};

export default App;
