import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         step:1
      }
    }

    componentDidMount(){
      console.log('component mounted')
    }
    componentDidUpdate(){
      console.log(`value updated ${this.state.count}`);
    }
    componentWillUnmount(){
      console.log('component unmounted');
    }
    
  render() {
    const{count,step}=this.state
    return (
      <div>


        <h1>{count}</h1>
        <input type='text' value={step} onChange={(e)=>this.setState({step:Number(e.target.value)})}/>
        <button onClick={()=>this.setState({count:count+step})}>Add</button>
        <button onClick={()=>this.setState({count:count-step})}>Minus</button>
        <button onClick={()=>this.setState({count:0})}>Reset</button>
        
      </div>
    )
  }
}
