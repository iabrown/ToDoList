import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component{
  render(){
  return <div className="TaskList">
  <ul className="todo" id="todo">Todo</ul>

  <ul className="todo" id="completed">Completed</ul>

  <TaskItem/>
  </div>
}
};

export default TaskList;
