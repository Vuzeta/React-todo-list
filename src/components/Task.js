import React from "react";
import "./Task.css";

//icons
import high from "./assets/high.png";
import medium from "./assets/medium.png";
import low from "./assets/low.png";

//Convert string to icon path
function iconPath(priority) {
  if (priority === "low") return low;
  else if (priority === "medium") return medium;
  else if (priority === "high") return high;
}

const Task = props => {
  const finishDate = new Date(props.finishDate).toLocaleString();
  return (
    <div className="task-wrapper">
      <img src={iconPath(props.priority)} alt="icon" />
      <p key={props.id} className="task-element">
        <strong>{props.text}</strong> ({props.date}){" "}
        {!props.done ? null : ` Confirmation of execution: ${finishDate}`}
        {!props.done ? (
          <button
            onClick={() => props.doneTask(props.id)}
            className="button-done">
            Done
          </button>
        ) : null}
        <button
          onClick={() => props.deleteTask(props.id)}
          className="button-remove">
          Remove
        </button>
      </p>
    </div>
  );
};

export default Task;
