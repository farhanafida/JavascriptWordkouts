import React, { Component } from 'react'

class ClassConstructor extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }

    incCount(){
      this.setState(
        (prevState)=>({
            count:prevState.count+1
        }))
    }

    
    
  render() {
    return (
      <div>
        <h1>Here print count: {this.state.count} </h1>
        <button onClick={()=> this.incCount()}>click</button>
        
      </div>
    )
  }
}

export default ClassConstructor
