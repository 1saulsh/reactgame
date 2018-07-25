import React, { Component } from 'react';
import StateCard from "./components/StateCard";
import Wrapper from "./components/Wrapper";
import Header from "./Header/Header";
import flag from "./pics.json";
import './App.css';

class App extends Component {
  // Setting this.state.flag to the flag json array
  state = {
    flag
  };

  removeFlag = id => {
    // Filter this.state.flag for flag with an id not equal to the id being removed
    const flag = this.state.flag.filter(flag => flag.id !== id);
    // Set this.state.flag equal to the new flag array
    this.setState({ flag });
  };
  render() {
    return (
      <Wrapper>
        <Title>Flag List</Title>
        {this.state.flags.map(flag => (
          <StateCard
            removeFlag={this.removeFlag}
            id={flag.id}
            name={flag.name}
            image={flag.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
