import react from 'react';

const Login = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = JSON.stringify({username:"dheeru", password: 'admin'})
        fetch("emp/login",{method:"POST", body:data}).then(res=>res.json()).then(res=>{
            console.log("success", res);
        },err =>{
            console.log("error", err);
        })
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <section>
                <label>Username</label>
                <input type={"text"} />
            </section>
            <section>
                <label>Username</label>
                <input type={"password"} />
            </section>
            <section>
                <button type='reset'>Cancel</button>
                <button type='submit'>Login</button>
            </section>
        </form>
    )
}

export default Login;