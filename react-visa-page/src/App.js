import React, { Component } from 'react';
import ReactStrap from 'reactstrap';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Footer />
        <Navbar />
      </div>


    );
  }
}
export default App;
