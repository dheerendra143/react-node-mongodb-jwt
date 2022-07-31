import react from 'react';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ username: "dheeru", password: 'admin' })
        fetch("emp/login", { method: "POST", body: data }).then(res => res.json()).then(res => {
            console.log("success", res);
        }, err => {
            console.log("error", err);
        })
    }

    const handleReset = (e) => {
        const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNwb25zZSI6eyJfaWQiOiI2MmUwMjg4YTJmMzBmY2Y4MGFlYWY0MWMiLCJlbXBOYW1lIjoiZGhlZXJ1IiwiZW1wRW1haWwiOiJ2ZWVyQGdtLmNvbSIsImVtcE1vYmlsZSI6IjAwOTExMDk4OTAiLCJfX3YiOjB9LCJpYXQiOjE2NTkyODMxNzF9.1E00SGk5rJlWTucz2T_XhKdWfgrXSKEtDVEGYY0SHFY";
        const data = JSON.stringify({ username: "dheeru", password: 'admin' })
        fetch("emp/logout", {
            method: "POST",
            headers: new Headers({
                'authorization': `bearer ${TOKEN}`,
                'content-Type': 'application/x-www-form-urlencoded'
            }),
            body: data
        }).then(res => res.json()).then(res => {
            console.log("success", res);
        }, err => {
            console.log("error", err);
        })
    }

    const getAll = (e) => {
        fetch("emp/getAll", {
            method: "GET",
        }).then(res => res.json()).then(res => {
            console.log("success", res);
        }, err => {
            console.log("error", err);
        })
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <section>
                <label>Username</label>
                <input type={"text"} />
            </section>
            <section>
                <label>Username</label>
                <input type={"password"} />
            </section>
            <section>
                <button type='reset' onClick={(e) => handleReset()}>Cancel/Logout</button>
                <button type='reset' onClick={(e) => getAll()}>get data</button>
                <button type='submit'>Login</button>
            </section>

        </form>
    )
}

export default Login;