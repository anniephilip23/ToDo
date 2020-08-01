import React, {Component} from "react"
import Todo from "./Todo"

class CreatDay extends Component{
constructor(){
    super()
this.state ={day :[(<div></div>)],date: " ",todo: " ",
 note:[(<div></div>)], note1:[(<div></div>)], arr:[],
}
 

}

handleChange =(event) =>{
  this.setState({date: event.target.value});
  console.log(this.state.date)
//   this.setState({note:[(<div>{this.state.day}
// </div>)]})

}
// handleSubmit1=(event)=>{}
handleSubmit=(event)=>{
  this.state.arr.push(<div className="col-md-3" style ={{borderStyle: "double", padding :"1%"}}>
    <div style={{textAlign:"center"}}>{this.state.date}</div>
    
    
<Todo/>

    </div>)
  console.log(this.state)
 
this.setState ({day:this.state.arr
//  <div className="row" style={{marginLeft:"0%",marginRight:"0%"}}>{this.state.note}<div>
// <div style ={{borderStyle: "double", padding :"1%"}}>{this.state.date} <button style ={{marginLeft :"2%"}}>Remove</button></div>
//  </div>
// </div> 
})  
event.preventDefault();

}



render() {
 return (<div><form onSubmit={this.handleSubmit} style={{textAlign:"center"}}><p style={{textAlign:"center", margin:"2%"}}> Enter the Date :</p>
  <input  type="date"    value={this.state.date} onChange={this.handleChange} style={{textAlign:"center", margin:"1%"}}></input>
  <input type="submit" value ="Add"style={{textAlign:"center", margin:"1%"}} />
     </form>

     <div className ="row" style={{margin:"2%"}}>
       
       {this.state.day}
      
     </div>
    
 </div>)

 }}

export default CreatDay;