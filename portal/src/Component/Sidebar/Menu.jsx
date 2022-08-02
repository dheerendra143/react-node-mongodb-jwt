import react from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { singOutAction } from "./../../Redux/actions/userAction";
import { fetchApi } from "./../../Utils/Services/__fetch";

const Menu = ({ isLoggedin, userDetails, singOutAction}) => {
    const handleLogout = () => {
        fetchApi("GET", "emp/logout").then(res=>{
            singOutAction();
        })
        
    }
    return (
        <>
            <Link to="/">home</Link>
            {(isLoggedin) && <Link to="/login" style={{ margin: "10px" }}>Login</Link>}
            {!(isLoggedin) && <Link to="/addUser">create</Link> }
            {(isLoggedin) && <Button onClick={(e)=>handleLogout({})} variant='link'>Logout</Button>}
        </>
    )
}


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    singOutAction: (payload) => dispatch(singOutAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

