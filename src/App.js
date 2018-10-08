import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "./button";
import DisplayQuote from "./displayquote";

const sampleQuote = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <Button selectQuote={() => this.getQuote()} />
      </div>
    );
  }
}

export default App;
