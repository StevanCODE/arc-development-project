import React from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/theme';
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>}></Route>
          <Route exact path='/services' component={() => <div>Services</div>}></Route>
          <Route exact path='/revolution' component={() => <div>Revolution</div>}></Route>
          <Route exact path='/about' component={() => <div>About</div>}></Route>
          <Route exact path='/contact' component={() => <div>Contact</div>}></Route>
          <Route exact path='/estimate' component={() => <div>Estimate</div>}></Route>
          <Route exact path='/customsoftware' component={() => <div>Custom Software</div>}></Route>
          <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>}></Route>
          <Route exact path='/website' component={() => <div>Websites</div>}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
