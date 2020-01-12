import React from 'react';
import './css/App.css';
import ListApi from './js/ListApi.js';
function App() {
  return (
    <div className="App">
      <div className="headingStyles">
      <h1>Crypto Wiki</h1>
      <ListApi/>
    </div>
    </div>
  );
}

export default App;
