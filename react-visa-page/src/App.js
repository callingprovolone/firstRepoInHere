import React, { Component } from 'react';
import ReactStrap from 'reactstrap';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Footer />
        <Navbar />
        <Cards />
      </div>


    );
  }
}
export default App;
