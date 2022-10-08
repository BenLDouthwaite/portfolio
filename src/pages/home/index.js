import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
        <div>home</div>
            <ul>
            <li>
            <Link to="/login">login</Link>
            </li>
            <li>
            <Link to="/tasks">tasks</Link>
            </li>
        </ul>
    </>
    )
}