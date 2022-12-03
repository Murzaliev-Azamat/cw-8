import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Quotes from "./containers/Quotes/Quotes";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

function App() {
  return (
    <div className="App">
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px solid black"}}>
        <h3 style={{margin: '0'}}>Quotes Central</h3>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to={"/"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>Quotes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/add-quote"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>Submit new quote</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/quotes/:category" element={(
          <Quotes/>
        )}/>
        <Route path="/add-quote" element={(
          <AddQuote/>
        )}/>
        <Route path="/edit-quote/:id" element={(
          <EditQuote/>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
