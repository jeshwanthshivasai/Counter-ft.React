import React, { Component } from 'react';
import '../styles/Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAnimating: false,
    };
  }

  handleIncrement = () => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ count: this.state.count + 1, isAnimating: false });
    }, 500);
    this.playSound();
  };

  handleDecrement = () => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ count: this.state.count - 1, isAnimating: false });
    }, 500);
    this.playSound();
  };

  render() {
    const { count, isAnimating } = this.state;

    return (
      <div className="counter-container">
        <h1 className={`counter-display ${isAnimating ? 'chord-animation' : ''}`}>
          {count}
        </h1>
        <div className="button-group">
          <button className="glow-button" onClick={this.handleDecrement}>-</button>
          <button className="glow-button" onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
