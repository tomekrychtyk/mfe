import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
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
          <MarketingApp />
        </StylesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};
