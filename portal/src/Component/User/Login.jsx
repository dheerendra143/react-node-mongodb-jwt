import react from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { fetchApi } from "./../../Utils/Services/__fetch";

const Login = () => {
    const [username, setUsername] = useState("dheeru@gmail.com");
    const [password, setPassword] = useState("admin@123");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username: username, password: password };
        const response = fetchApi("POST", "/emp/login", data);
        response.then(sucess => {
            console.log("success", sucess)
        }, error => {
            console.log("error", error)
        })
    }

    const handleReset = (e) => {
        setUsername("");
        setPassword("");
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <section>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.value)} type={"email"} required />
            </section>
            <section>
                <label>Username</label>
                <input value={password} onChange={(e) => setPassword(e.value)} type={"password"} required />
            </section>
            <section>
                <Link to="/addUser"> Add New User</Link>
                <Button variant="primary" size="sm" type='reset' onClick={(e) => handleReset()}>Reset</Button>
                <Button variant="primary" size="sm" type='submit'>Login</Button>
            </section>

        </form>
    )
}

export default Login;