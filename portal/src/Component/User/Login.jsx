import react from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { fetchApi } from "./../../Utils/Services/__fetch";
import { connect } from "react-redux";
import { singInAction } from "./../../Redux/actions/userAction";

const Login = ({ singInAction }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { username: username, password: password };
        const response = fetchApi("POST", "/emp/login", data);
        response.then(sucess => {
            console.log("success", sucess)
            singInAction({ isLoggedin: true, userDetails: { session: sucess.session, name: sucess.name, email: sucess.email, contact: sucess.contact } })
            navigate("/")
        }, error => {
            console.log("error", error)
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
            <section>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type={"email"} required />
            </section>
            <section>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} required />
            </section>
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
    singInAction: (payload) => dispatch(singInAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);