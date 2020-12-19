import React from 'react';
import InputBar from './InputBar';
import TaskList from './TaskList';
import Footer from './Footer';

class App extends React.Component {
  state = { images: []
  };



  onSearchSubmit = async term => {
  };


  render(){
    return(
      <div className="container-fluid Main" style={{padding:'0px'}}>
        <InputBar SearchSubmit={this.onSearchSubmit}/>
        <TaskList/>
      <Footer />
      </div>
    );
  }
}

export default App;
