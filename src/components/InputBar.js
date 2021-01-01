import '../css/AppStylesheet.css';
import React from 'react';

class InputBar extends React.Component{
  state = {term: ''};

  taskInput = (event) => {
    event.preventDefault();
    // this.props.SearchSubmit(this.state.term)
    // console.log("Input entered");


    var value = document.getElementById('InputBar').value;
    if(value){
      console.log(value);
    }
  };


  render(){
    return(
     <div className="container-fluid InputBar">
      <form onSubmit={this.taskInput} autoComplete="off">
      <input type="text" id="InputBar" value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Insert a new task..."/>
      </form>
     </div>
   );
  }
}

export default InputBar;
