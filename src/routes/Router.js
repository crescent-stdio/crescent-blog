import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Blog, About } from './index';

const pageRouter = () => {
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
  </Switch>;
};

export default pageRouter;
