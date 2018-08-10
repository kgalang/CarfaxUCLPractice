import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Headline from './components/Headline/Headline';
import Footer from './components/Footer/Footer';
import UsedCarSearch from './components/UsedCarSearch/UsedCarSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Headline />
        <UsedCarSearch />
        <Footer />
      </div>
    );
  }
}

export default App;
