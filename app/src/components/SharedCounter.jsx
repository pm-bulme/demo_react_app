import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <div>
        <button className='inc' onClick={this.props.onIncrement}>Increment!</button>
        <h1>Current Count: {this.props.count}</h1>
      </div>
    );
  }
};

class CounterPool extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment()
  {
    this.setState(state =>  ({ count: state.count + 1 }) );    
  }

  render() {
    return (
      <div>
        <Counter 
          count={this.state.count} 
          onIncrement={this.increment} 
        />
        <Counter 
          count={this.state.count} 
          onIncrement={this.increment} 
        />
      </div>
    );
  }
}

export default CounterPool;
