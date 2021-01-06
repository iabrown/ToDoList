import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component{
  render(){
  return <div className="TaskList">
  <ul className="todo" id="todo">
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
  </ul>

  <ul className="todo" id="completed"><TaskItem/></ul>

  </div>
}
};

export default TaskList;
