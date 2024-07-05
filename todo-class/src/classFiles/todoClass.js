import React, { Component } from 'react'

export default class TodoClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todo:'',
         todos:[]
      }
    }

    changeVal(e){
        this.setState(
            {
                todo:e.target.value
            }
        )
    }
    addValue=()=>{
        const {todo,todos}=this.state

        if (todo.trim()===''){
            alert('Enter a task')
            return;
        }
        const existingTodo=todos.find(to=>(to.text===todo.trim()))
        if(existingTodo){
            alert('Task already exist')
            return;
        }

        this.setState(
            {
                todos:[...todos,{id:Date.now(),text:todo,checked:false}],
                todo:''
            }
        )
    }
    
    
    
  render(){
    const {todo,todos}=this.state

    return (
      <div>
        <div className='mainPart'>
        <input value={todo}  onChange={(e)=>this.changeVal(e)} />
        <button onClick={()=>this.addValue()}>+</button>
        </div>
        <div className='displayList'>
        {
           todos.map((val)=>(
            <ul>
                <li key={val.id}>{val.text}</li>
            </ul>
           )
            
           )
        }
        </div>
        
        
      </div>
    )
  }
}
