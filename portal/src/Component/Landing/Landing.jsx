import react from 'react';
import Login from "../User/Login";
import Home from "../Home/Home";

const Landing = () => {
    const isLogin = false;
    const CurrComp = (isLogin) ? Home : Login;
    return (
        <>
            <CurrComp />
        </>

    )
}

export default Landing;