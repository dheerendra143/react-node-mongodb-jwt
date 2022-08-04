import react from 'react';
import Home from "../Home/Home";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from '../Sidebar/Menu';



const Landing = ({ isLoggedin }) => {
    const isLogin = isLoggedin;
    let navigate = useNavigate();
    if (isLogin) {
        navigate("/login")
    }
    return (
        <>
           kjhkl
        </>

    )
}

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(Landing);