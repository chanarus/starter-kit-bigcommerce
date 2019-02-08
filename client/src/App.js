import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    message: ""
  };

  componentDidMount = () => {
    axios
      .get("api/todos")
      .then(res => {
        this.setState({
          message: res.data.message
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
