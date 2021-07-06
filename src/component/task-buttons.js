import React, { Fragment } from "react"

const TaskButtons = ({ task, removeTask }) => {

  return (
    <Fragment>
      {!task.done ? (
        <button onClick={removeTask(task.id)}>Concluído</button>
      ) : null}
    </Fragment>
  );
};

export default TaskButtons