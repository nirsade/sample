import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { theme } from './../theme';
import AppHeader from './../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter';
import Main from './Main';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className='app-container'>
      <AppHeader />
      <BrowserRouter><Main /></BrowserRouter>
      <AppFooter />
    </div>
  </ThemeProvider>
)

export default App;
