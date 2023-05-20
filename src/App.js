import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "./html/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element= {<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
