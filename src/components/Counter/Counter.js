import React, { Component } from 'react';
import Controls from './Controls';
import { Value } from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

        state = { value: this.props.initialValue };
        
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
