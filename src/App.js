import React from "react";
import axios from "axios";

import "./styles.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice: advice });
        //console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { quote } = this.state.advice;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>;
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
