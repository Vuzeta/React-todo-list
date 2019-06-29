import React from "react";
import Task from "./Task";
import "./ToDo.css";

const ToDo = props => {
  let notDone = props.tasks.filter(task => !task.done);
  let done = props.tasks.filter(task => task.done);

  done.sort((a, b) => b.finishDate - a.finishDate);

  notDone = notDone.map(task => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      date={task.date}
      priority={task.priority}
      done={task.done}
      finishDate={task.finishDate}
      deleteTask={props.deleteTask}
      doneTask={props.doneTask}
    />
  ));
  done = done.map(task => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      date={task.date}
      priority={task.priority}
      done={task.done}
      finishDate={task.finishDate}
      deleteTask={props.deleteTask}
      doneTask={props.doneTask}
    />
  ));
  done = done.sort((a, b) => a.finishDate - b.finishDate);
  return (
    <div>
      <p className="tasks-todo-title">
        Tasks to do {notDone.length ? `(${notDone.length})` : null}
      </p>
      <select name="" id="" onChange={props.sort} className="sort">
        <option value="">Sort by</option>
        <option value="abetically">Sort from A to Z</option>
        <option value="date">Sort by date of addition</option>
      </select>
      {notDone.length ? null : <p className="no-tasks">No tasks</p>}
      <div className="tasksList">{notDone}</div>
      <hr />
      <p className="tasks-completed-title">Tasks completed ({done.length})</p>
      <div className="tasksList">{done.slice(0, 5)}</div>
    </div>
  );
};

export default ToDo;
