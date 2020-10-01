import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    advice: ''
  }

  // life cycle component
  componentDidMount() {
    this.fetchAdvice(); // we call the function
  }

  // this is a function that belongs to the class App
  // thats why it doesnt need const at the beginning:
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip; // this is the same as: response.data.slip.advice

        this.setState({ advice }) // this sets the advice value (the one from above), to the set property of state
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {

    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
