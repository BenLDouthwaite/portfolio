import React, { useEffect, useState } from "react";
import { getTasks } from "../../util/APIUtils";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(
      (result) => {
        setTasks(result);
      },
      (error) => {
        console.log("Error getting tasks", error);
      }
    );
  }, []);

  return (
    <>
      <div>tasks</div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
}
