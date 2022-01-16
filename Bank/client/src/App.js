import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  data :{}
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => {
        this.setState({ data:res })})
      // .then(res => console.log(res))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
 
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Welcome to the bank</h1>
        </header>
        <p className="App-intro">id: {this.state.data.id}</p>
        <p className="App-intro">credit: {this.state.data.credit}</p>
        <p className="App-intro">credit: {this.state.data.cash}</p>
      </div>
    );
  }
}

export default App;
