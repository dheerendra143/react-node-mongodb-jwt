import react from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Create from "./Create";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ username: username, password: password })
        fetch("emp/login", { method: "POST", body: data }).then(res => res.json()).then(res => {
            console.log("success", res);
        }, err => {
            console.log("error", err);
        })
    }

    const handleReset = (e) => {
        setUsername("");
        setPassword();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <section>
                <label>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.value)} type={"email"}  required/>
            </section>
            <section>
                <label>Username</label>
                <input value={password} onChange={(e)=>setPassword(e.value)} type={"password"} required/>
            </section>
            <section>
                <Button variant="primary" size="sm" type='reset' onClick={(e) => handleReset()}>Reset</Button>
                <Button variant="primary" size="sm" type='submit'>Login</Button>
            </section>

        </form>
    )
}

export default Login;