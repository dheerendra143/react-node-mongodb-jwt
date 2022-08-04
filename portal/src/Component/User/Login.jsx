import react from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { fetchApi } from "./../../Utils/Services/__fetch";
import { connect } from "react-redux";
import { signInAction } from "../../Redux/Actions/userAction";
import { useEffect } from 'react';

const Login = ({ signInAction, isLoggedin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        if (isLoggedin) {
            navigate("/");
            console.log("dheere")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username: username, password: password };
        const response = fetchApi("POST", "/emp/login", data);
        response.then(sucess => {
            console.log("success", sucess)
            if (sucess.status === 200) {
                const response = sucess.response;
                signInAction({ isLoggedin: true, userDetails: { session: response.session, name: response.name, email: response.email, contact: response.contact } });
                setErrMsg("");
                navigate("/");
            } else {
                setErrMsg(sucess.msg)
            }
        }, error => {
            console.log("error", error)
            setErrMsg(error)
        })
    }

    const handleReset = (e) => {
        setUsername("");
        setPassword("");

        const response = fetchApi("POST", "/emp/logout", {});
        response.then(sucess => {
            console.log("success", sucess)
            // singInAction({isLoggedin: true, userDetails:{ session: 2, name:"dheerendra Singh", email:""} })
            // navigate("/")
        }, error => {
            console.log("error", error)
        })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            jhgj
            {isLoggedin ? "true" : "fal"}
            <section>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type={"email"} required />
            </section>
            <section>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} required />
            </section>
            {(errMsg) && <p style={{ color: "red" }}>{errMsg}</p>}
            <section>
                <Link to="/addUser"> Add New User</Link>
                <Button variant="primary" size="sm" type='reset' onClick={(e) => handleReset()}>Reset</Button>
                <Button variant="primary" size="sm" type='submit'>Login</Button>
            </section>

        </form>
    )
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    signInAction: (payload) => dispatch(signInAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);