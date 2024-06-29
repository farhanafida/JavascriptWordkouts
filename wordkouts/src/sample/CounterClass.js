import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment=()=>{
        this.setState(
           {count:this.state.count+1}
        )
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    clear=()=>{
        this.setState({
            count:0
        })
    }
    
  render() {
    return (
      <div>

        <h1 align='center'> {this.state.count} </h1>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    )
  }
}
