import React, { Component } from 'react'

export default class PropsClassChild extends Component {
  render(props) {
    const{name,age}=this.props.val
    return (
      <div>
        {/* <h1> {this.props.name} </h1> */}
        {/* <h1> {this.props.name},{this.props.age} </h1> */}
        {/* <h1> {this.props.val.name},{this.props.val.age} </h1> */}
        <h1>{name},{age}</h1>
      </div>
    )
  }
}
