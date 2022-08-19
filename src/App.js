import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetch("https://evening-fjord-54109.herokuapp.com/db")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          // setIsLoaded(true);
          setTasks(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Test API Call - Read from DB</h1>
        <ul>
          {tasks.map(task => (
            <li key={task}>
              {task}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
