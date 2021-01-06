import '../css/AppStylesheet.css';
import React from 'react';

function addTaskItem(text){
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('button');

  var remove = document.createElement('button');
  remove.innerHTML = "remove";

  var complete = document.createElement('button');
  complete.innerHTML = "complete";

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
};

class InputBar extends React.Component{
  state = {term: ''};

  taskInput = (event) => {
    event.preventDefault();
    // this.props.SearchSubmit(this.state.term)
    // console.log("Input entered");


    var value = document.getElementById('InputBar').value;
    if(value){
      addTaskItem(value);
      document.getElementById('InputBar').value = '';
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
