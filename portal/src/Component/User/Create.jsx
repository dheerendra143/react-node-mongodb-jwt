import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { fetchApi } from "./../../Utils/Services/__fetch";

const Create = () => {
    const [username, setUsername] = useState("dheerendra singh");
    const [email, setEmail] = useState("singhdhe@gm.com");
    const [contact, setContact] = useState("0878765676");
    const [password, setPassword] = useState("user@123");
    const [conpassword, setConPassword] = useState("user@123");
    const [viewstatus, setViewstatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username", username)
        const data = { userName: username, userEmail: email, userContact: contact, userPass: password };
       
        const response = fetchApi("POST","/emp/create", data);
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

    const handleViewPassword = (e) => {
        setViewstatus(!viewstatus);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Add User    </h2>
            <section>
                <label>Name</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type={"text"}  required/>
            </section>
            <section>
                <label>E Mail</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type={"email"}  required/>
            </section>
            <section>
                <label>Contact No</label>
                <input value={contact} onChange={(e)=>setContact(e.target.value)} type={"tel"}  required/>
            </section>
            <section>
                <label>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type={(viewstatus) ? "text" : "password"} required/>
                <Button onClick={(e)=>handleViewPassword()} variant="link">Link</Button>
            </section>
            <section>
                <label>Confirm Password</label>
                <input value={conpassword} onChange={(e)=>setConPassword(e.target.value)} type={(viewstatus) ? "text" : "password"} required/>
            </section>
            <section>
                <Button variant="primary" size="sm" type='reset' onClick={(e) => handleReset()}>Reset</Button>
                <Button variant="primary" size="sm" type='submit'>Login</Button>
            </section>

        </form>
    )
}

export default Create;