import React, {Component} from "react"


class Todo extends Component{
constructor(){
    super()
this.state ={todo:" ",arr2:[],list:" "
}
}

// delete(x){
//    const y = x.len
//    console.log(y)
//   const ar = this.state.arr2[y]
//   console.log(ar) 
//   ar
// }

delete = len => {
    const x=len.len
    console.log(x)
    const string = this.state.arr2[x]
    console.log(string)
    this.State.arr2[x]=<strike>{this.state.arr2[x]}</strike>; 
  };
handleSubmit1=(event)=>{
    const len = this.state.arr2.length
    console.log(len)
// this.state.arr2.push(<li id ={len}>{this.state.todo} <button onClick={()=>this.delete({len})}>Strike</button></li>)
this.state.arr2.push(this.state.todo)
this.setState ({list:<li id ={len}>{this.state.arr2} </li>})  
this.setState ({todo:" " })  
event.preventDefault();
    }



handleChange1 =(event) =>{
    this.setState({todo: event.target.value});
    console.log(this.state.todo)}

render() {
    return (<div><form onSubmit={this.handleSubmit1} style={{textAlign:"center"}}>
    <input id="txt"  type="text"    value={this.state.todo} onChange={this.handleChange1} style={{textAlign:"center", margin:"1%"}}></input>
    <input type="submit" value ="Add"style={{textAlign:"center", margin:"1%"}} />
       </form>
      {this.state.todo}
<div><ul>{this.state.list}
    </ul>
    </div>
   </div>)
}}

export default Todo;