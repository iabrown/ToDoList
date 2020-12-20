import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component{
  render(){
  return <div className="TaskList">
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  </div>
}
};

export default TaskList;
