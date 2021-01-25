import './App.css';
import Blog from "./components/Blog";
import React from "react";
import Homepage from "./components/Homepage";
import './App.css';
import Login from './components/Login';
import Reg from './components/Reg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Homepage/>
  )

}

export default App;
