import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
    </>
  );
};

export default App;