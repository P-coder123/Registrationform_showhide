//import "./styles.css";
import Registration from './Registration';
import Greet from './Greet'
import React,{ Component } from "react"


class App extends Component {
    constructor(props){
      super(props);

      this.state={
        isRegistered:false,
        name:null,
        email:null,
        password:null
      }
    }
    
     registerHandle=(event)=>{
       
        event.preventdefault()
    }

    render(){
      return (
        <div>
          {this.state.isRegistered ? <Greet/>:<Registration submit={this.registerHandle}/>}
          </div>
      );
          
        
  }
}
 

export default App;