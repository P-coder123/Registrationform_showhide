//import "./styles.css";
import Registration from './Registration';
import Greet from './Greet'
import React,{ Component } from "react"


class App extends Component {
    constructor(props){
      super(props);

      this.state={
        isRegistered:false,
      }
    }

    render(){
      return (
        <div>
          {this.state.isRegistered ? <Greet/>:<Registration/>}
          </div>
      );
          
        
  }
}
 

export default App;