import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};
