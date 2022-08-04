import react from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOutAction } from "./../../Redux/Actions/userAction";
import { fetchApi } from "./../../Utils/Services/__fetch";
import Nav from 'react-bootstrap/Nav';
import {globalState} from "./../../Redux/globalState";

const Menu = ({ isLoggedin, userDetails, singOutAction }) => {
    const handleLogout = () => {
        fetchApi("GET", "emp/logout").then(res => {
            window.location.reload();
            singOutAction(globalState);
           
        }, err => {
            window.location.reload();
        })

    }

    const handleGetList = () => {
        fetchApi("GET", "emp/getAll").then(res => {
            console.log("res", res);
        })

    }
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/">Home</Link>
                {(isLoggedin) && <Link to="/login">Active</Link>}
                {!(isLoggedin) && <Link to="/addUser">create</Link>}
                {(isLoggedin) && <Button onClick={(e) => handleGetList({})} variant='link'>Get List</Button>}
                {(isLoggedin) && <Button onClick={(e) => handleLogout({})} variant='link'>Logout</Button>}


            </Nav>
        </>
    )
}


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    signOutAction: (payload) => dispatch(signOutAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

