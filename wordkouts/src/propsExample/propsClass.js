import React, { Component } from 'react';
import PropsClassChild from './propsClassChild';

export default class PropsClass extends Component {

  render() {
    return (
      <div>
        {/* <PropsClassChild name='avinash'/> */}
        {/* <PropsClassChild name='avinash' age='21'/> */}
        {/* <PropsClassChild val={{name:'ashkar',age:32}} /> */}
        <PropsClassChild val={{name:'ashkar',age:32}} />
        
      </div>
    )
  }
}
