import React, { Component } from 'react';
import Cockpit from './containers/Cockpit/Cockpit';
import Div from './hoc/Div';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Div>
          <Cockpit/>
        </Div>
      </BrowserRouter>
    );
  }
}

export default App;