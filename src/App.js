import React, { Component } from 'react';
import './App.css';
import WidgetBar from './WidgetBar/WidgetBar';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="App-Dashboard"></div>
       {/* <Header />  */}
      <WidgetBar /> 
      </div>
    );
  }
}

export default App;