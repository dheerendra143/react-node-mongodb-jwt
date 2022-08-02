import react from 'react';
import Login from "../User/Login";
import Home from "../Home/Home";
import { connect } from "react-redux";

const Landing = ({ isLoggedin }) => {
    const isLogin = isLoggedin;
    const CurrComp = (isLogin) ? Home : Login;
    return (
        <>
            <CurrComp />
        </>

    )
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(Landing);