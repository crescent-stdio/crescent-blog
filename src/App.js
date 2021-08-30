import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Postlist from './pages/Postlist';
import Post from './pages/Post';
import About from './pages/About';
import NotFound from './pages/404NotFound';
import './App.css';

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Switch >
        <Route path="/post/:id" component={Post} />
        <Route path="/post" component={Postlist} />
      </Switch>
      <Route path="/about" component={About} />
    </>
  );
}

export default App;
