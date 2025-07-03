// src/XClassComp.jsx
import React, { Component } from 'react';

class XClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      

      <div style={styles.container}>
        <h1>Counter App</h1>
        <h3>Count: {this.state.count}</h3>      
      <div style={styles.buttonGroup}>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Increase space between buttons
    marginTop: '20px'
  }
};

export default XClassComp;
