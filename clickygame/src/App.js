import React, { Component } from 'react';
import StateCard from "./components/StateCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import flag from "./pics.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    flag
  };

  removeFlags = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const flag = this.state.flag.filter(flag => flag.id !== id);
    // Set this.state.friends equal to the new friends array
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
