import React,{Component} from "react";

class Counter extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    incrementCounter(){
        this.setState(
            (prevState)=>({
                count:prevState.count+1
            }))
        console.log(this.state.count)
    }
    decrementCounter(){
        this.setState(
            prevState=>({
                count:prevState.count-1
            })
        )
    }
    clear(){
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={()=> this.incrementCounter()}>Plus</button>
                <button onClick={()=> this.decrementCounter()} >Minus</button>
                <button onClick={()=> this.clear()} >Clear</button>
            </div>
        )
    }
    
}

export default Counter;