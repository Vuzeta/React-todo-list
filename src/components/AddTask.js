import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    date: new Date().toISOString().slice(0, 10),
    priority: "medium",
    id: 0,
    error: ""
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handlePriority = e => {
    this.setState({
      priority: e.target.value
    });
  };

  handleButtonAdd = () => {
    if (this.validation()) {
      const newTask = {
        text: this.state.text,
        date: this.state.date,
        priority: this.state.priority,
        id: this.state.id,
        done: false,
        finishDate: null
      };
      this.setState(prevState => ({
        id: prevState.id + 1,
        text: "",
        date: new Date().toISOString().slice(0, 10),
        priority: "medium",
        error: ""
      }));
      this.props.addTask(newTask);
    }
  };

  validation() {
    const currentDate =
      new Date()
        .toISOString()
        .slice(0, 10)
        .split("-")
        .join("") * 1;
    const selectedDate = this.state.date.split("-").join("") * 1;
    if (!this.state.text) {
      this.setState({
        error: "Complete your task field"
      });
    } else if (this.state.text.length > 255) {
      this.setState({
        error: "Task content contains more than 255 characters"
      });
    } else if (selectedDate < currentDate) {
      this.setState({
        error: "Date is incorrect"
      });
    } else {
      return true;
    }
  }
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-01-01";
    return (
      <div>
        <div className="form-task">
          <input
            type="text"
            className="task"
            placeholder="Your task"
            value={this.state.text}
            onChange={this.handleText}
          />
          <input
            type="date"
            className="date"
            value={this.state.date}
            min={minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
          <select
            className="priority"
            onChange={this.handlePriority}
            value={this.state.priority}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        {this.state.error ? (
          <p className="error-handler">{this.state.error}</p>
        ) : null}
        <button className="button-add" onClick={this.handleButtonAdd}>
          Add Task
        </button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
