import React, { Component } from "react";
import "./App.css";
import ToDo from "./ToDo";
import AddTask from "./AddTask";
import logo from "./assets/organize.png";

class App extends Component {
  state = {
    tasks: []
  };

  sortTask = e => {
    const value = e.target.value;
    let tasks = [...this.state.tasks];

    if (value === "abetically") {
      if (tasks.length >= 2) {
        tasks.sort((a, b) => {
          a = a.text.toLowerCase();
          b = b.text.toLowerCase();

          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
      }
    } else if (value === "date") {
      tasks = tasks.sort(
        (a, b) =>
          a["date"].split("-").join("") * 1 - b["date"].split("-").join("") * 1
      );
    } else {
      return;
    }
    this.setState({ tasks });
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  doneTask = id => {
    const tasks = [...this.state.tasks];
    tasks.map(task => {
      if (task.id === id) {
        task.done = true;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = task => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="logo-wrapper">
          <p className="logo">TODO LIST</p>
          <img src={logo} alt="" width="45px" />
        </div>
        <div className="container-app">
          <AddTask addTask={this.addTask} />
          <ToDo
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            doneTask={this.doneTask}
            sort={this.sortTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
