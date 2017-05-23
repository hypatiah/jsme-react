import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function test() {
  alert('test');
}

class App extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const { JSApplet } = window;
      if (JSApplet) {
        console.log(JSApplet);
        clearInterval(interval);

        const jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px");
        jsmeApplet.setNotifyStructuralChangeJSfunction('jsmeChange');

        window.jsmeChange = () => {
          var patt=/\[([A-Za-z][a-z]?)H?\d*:\d+\]/g; //regexp pattern for numbered atom

          const smiles = jsmeApplet.smiles(); //atom that are colored are numbered
          const new_smiles = smiles.replace(patt, '<em>$1</em>');
          document.getElementById("smiles_container").innerHTML = new_smiles        }
      }
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="jsme_container"></div>
        <div id="smiles_container"></div>
      </div>
    );
  }
}

export default App;
