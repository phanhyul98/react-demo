import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Route>
        <Route path='/' exact />
      </Route>
      </Router>
    </>
  );
}

export default App;
