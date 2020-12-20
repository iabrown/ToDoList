import React from 'react';

class TaskItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  // componentDidMount(){
  //   this.imageRef.current.addEventListener('load', this.setSpans);
  //
  // }
  //
  // setSpans = () => {
  //   const height = this.imageRef.current.clientHeight;
  //   const spans = Math.ceil(height / 15);
  //
  //   this.setState({spans});
  // };


  render(){
    return(
      <div className="TaskItem">
        <h1>Task Title</h1>
        <p>Task Description</p>
      </div>

    );
  }
}

export default TaskItem;
