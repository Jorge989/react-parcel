import React, { useState } from "react";
const App = ({ name }) => {
  const [task, updateTask] = useState([]);
  return (
    <>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
          <tbody>
            {task.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.describe}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </>
  );
};
export default App;
