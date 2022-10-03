import React, { useEffect, useState } from "react"

export default function Db() {

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
        <div>
            <h1>db test</h1>
            <div className="App">
            <header className="App-header">
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
        </div>
    )
}