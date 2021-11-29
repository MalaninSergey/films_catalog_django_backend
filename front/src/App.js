import React, { useState } from "react";
import {Box, Nav, Anchor, Header, Grommet, TextInput} from 'grommet';
import Series from './components/series'
import Films from './components/films'
import Persons from './components/persons'
import Seriesinfopage from './components/SeriesInfoPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};




  const App = () => {
      return (
        <Grommet theme={theme} full>
          <Router>
            <Header background="brand" align="start">
              <Nav direction="row" background="brand" pad="medium">
                  <Anchor href="films"  label="Films" hoverIndicator />
                  <Anchor href="series" label="Series" hoverIndicator />
                  <Anchor href="persons" label="Persons" hoverIndicator />
              </Nav>
            </Header>
            <Switch>
              <Route path="/films">
                  <Films/>
              </Route>
              <Route path="/series" exact>
                <Series/>
              </Route>
              <Route path="/persons">
                <Persons/>
              </Route>
              <Route path="/series/:id">
                <Seriesinfopage/>
              </Route>
        </Switch>
          </Router>
        </Grommet>
      );
    }

export default App;
