import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Navigation} from './components/Navigation';
import {Main} from './components/Main';
import {Footer} from './components/Footer'
export class App extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App
