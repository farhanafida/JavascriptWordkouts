import React, { Component } from 'react'

export default class ClassLifetime extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    componentDidMount(){
        console.log('coumponent mounted')
    }

    componentWillUnmount(){
        console.log('component unmounted')
    }
    componentDidUpdate(){
        console.log('component updated')
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>hey</button>
        
      </div>
    )
  }
}
