import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Postlist from './pages/Postlist';
import Post from './pages/Post';
import About from './pages/About';
import NotFound from './pages/404NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Switch>
          <Route path="/post/:id" component={Post} />
          <Route path="/post" component={Postlist} />
        </Switch>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
