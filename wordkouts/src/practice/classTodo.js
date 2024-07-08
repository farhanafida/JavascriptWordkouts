

import React, { Component } from 'react'

export default class ClassTodo extends Component {

    constructor(props) {
      super(props)

      this.inputRef=React.createRef()
    
      this.state = {
         todo:'',
         todos:[],
      }
    }

    componentDidMount(){
      this.inputRef.current.focus();
    }
    
    handleButton=()=>{
        const{todos,todo}=this.state;
        this.setState({todos:[...todos,todo]})
        this.setState({todo:''})
    }
    
  render() {
    const{todo,todos}=this.state;
    console.log(todos);
    
    return (
      <div>
        <h1>todoClass</h1>

        <input type='text' onChange={(e)=>this.setState({todo:e.target.value})} value={todo} ref={this.inputRef} />
        <button onClick={()=>this.handleButton()}>add value</button>

        <>
        {
            todos.map((obj,ind)=>(
                <ul>
                    <li key={ind}>{obj}<button onClick={()=>this.setState({todos:todos.filter((val)=>val!==obj)})}>Delete</button> </li>
                </ul>
            ))
        }
        </>
        
      </div>
    )
  }
}
