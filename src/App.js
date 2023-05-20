import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import Login from "./html/Login"
import Dashboard from "./html/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element= {<Login/>}></Route>
        <Route index path='dashboard' element= {<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
