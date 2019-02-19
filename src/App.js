import React, { Component } from 'react';
import './App.css';
import Widget from './Widgets/Widget';
import AttainmentIcon from './Widgets/images/attainmenticon';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="App-Dashboard"></div>
      <Widget label='Current Attainment' value='75.8' symbol='%' widgeticon ='content_copy' widgetclass = ' WidgetIcon WidgetAttainmentIcon' widgetlowertext='Get Some Insights' widgetlowericon={<AttainmentIcon />}> </Widget>
      </div>
    );
  }
}

export default App;