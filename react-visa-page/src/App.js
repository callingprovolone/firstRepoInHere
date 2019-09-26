import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import HomeJumbo from './components/HomeJumbo';
import VisasJumbo from './components/VisasJumbo';
import OportunityJumbo from './components/OportunityJumbo'
import { BrowserRouter, Route } from "react-router-dom";
import InversionJumbo from './components/InversionJumbo';
import UsaJumbo from './components/UsaJumbo';
import FormBody from './components/FormBody';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Route exact-path='/' component={HomeJumbo} /> */}
          <Route path='/visas' component={VisasJumbo} />
          <Route path='/Negocios' component={OportunityJumbo} />
          {/* <Route path= '/Cards' component={Cards} /> */}
          <Route path='/Home' component={HomeJumbo} />
          <Route path='/NegociosUsa' component={UsaJumbo} />
          <Route path='/Inversion' component={InversionJumbo} />
          <Route path='/FormBody' component={FormBody} />


        </BrowserRouter>
        <Footer />

      </div>


    );
  }
}
export default App;
