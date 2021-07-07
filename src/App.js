import React, { Component } from "react";
import TaskButtons from "./component/task-buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { 
          id: 1, 
          description: "Tomar café da manhã", 
          done: false
         },
        {
          id: 2,
          description: "Ler e-mails",
          done: false
        },
        {
          id: 3,
          description: "Estudar React",
          done: false
        }
      ]
    }
  }

  removeTask = (taskId) => () => {
    let state = Object.assign({}, this.state);
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    this.setState(state);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>
              {task.description}
              <TaskButtons
                task={task}
                removeTask={this.removeTask}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
