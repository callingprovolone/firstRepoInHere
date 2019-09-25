import React, { Component } from 'react';
import ReactStrap from 'reactstrap';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import HomeJumbo from './components/HomeJumbo';
import VisasJumbo from './components/VisasJumbo';
import OportunityJumbo from './components/OportunityJumbo'
import { BrowserRouter, Route } from "react-router-dom";
import HomeImage from './components/HomeImage';
import ContactCard from './components/ContactCard';
import InversionJumbo from './components/InversionJumbo';
import UsaJumbo from './components/UsaJumbo';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/visas' component={VisasJumbo} />
          <Route path='/Negocios' component={OportunityJumbo} />
          {/* <Route path= '/Cards' component={Cards} /> */}
          <Route path='/HomeImage' component={HomeImage} />
          <Route path='/Home' component={HomeJumbo} />
          <Route path='/NegociosUsa' component={UsaJumbo} />
          <Route path='/Inversion' component={InversionJumbo} />


        </BrowserRouter>
        <Footer />

      </div>


    );
  }
}
export default App;
