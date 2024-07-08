import React, { Component } from 'react'

export default class ClassLifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    componentDidMount(){
        console.log('mounted')
    }
    componentDidUpdate(){
        console.log(`updated ${this.state.count}`);
    }
    componentWillUnmount(){
        console.log('unmounted');
    }
  render() {
    const{count}=this.state
    return (
      <div>

        <h1>{count}</h1>
        <button onClick={()=>this.setState({count:count+1})}>click</button>
        
      </div>
    )
  }
}
