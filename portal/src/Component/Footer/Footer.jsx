import react from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOutAction } from "./../../Redux/Actions/userAction";
import { fetchApi } from "./../../Utils/Services/__fetch";

const Footer = ({ isLoggedin, userDetails, singOutAction}) => {
    const handleLogout = () => {
        fetchApi("GET", "emp/logout").then(res=>{
            //singOutAction(res);
        })
        
    }
    return (
        <footer>
            <Link to="/">Footer</Link>
            <Link to="/">Career</Link>
            <Link to="/">Link</Link>
        </footer>
    )
}


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    signOutAction: (payload) => dispatch(signOutAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

