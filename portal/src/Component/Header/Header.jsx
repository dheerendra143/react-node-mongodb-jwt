import react from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOutAction } from "./../../Redux/Actions/userAction";
import { fetchApi } from "./../../Utils/Services/__fetch";
import { globalState } from "./../../Redux/globalState";

const Header = ({ isLoggedin, userDetails, signOutAction }) => {
   let name = (isLoggedin) ? {...userDetails.userDetails}.name : "";
   
    const handleLogout = () => {
        fetchApi("GET", "emp/logout").then(res => {
            window.location.reload();
            signOutAction(globalState);
        })
    }
    return (
        <header>
            <aside>
                logo
            </aside>
            <aside>
                {(isLoggedin) && <strong style={{textTransform:"capitalize"}}>Hi, {name}</strong>}
                {(!isLoggedin) && <Link to="/login" style={{ margin: "10px" }}>Login</Link>}
                {(isLoggedin) && <Button onClick={(e) => handleLogout({})} variant='link'>Logout</Button>}
            </aside>
        </header>
    )
}


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    signOutAction: (payload) => dispatch(signOutAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

