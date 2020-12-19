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
        <img alt="alternate"  ref="" src="images/image1.jpg"/>
        <br />
        <h1>Task Title</h1>
      </div>

    );
  }
}

export default TaskItem;
