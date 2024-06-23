import React,{Component} from "react";



class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'Hey how are you'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for click the button'
        })
    }
    doubleClikMessage(){
        this.setState({
            message:'Thank you for double click the message'
        })
    }
    render(){

        return(
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={()=> this.changeMessage()} onDoubleClick={()=> this.doubleClikMessage()}>Click</button>
            </div>
        )
    }
}

export default Message;