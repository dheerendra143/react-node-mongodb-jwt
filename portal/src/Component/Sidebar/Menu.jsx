import react from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/login" style={{margin:"10px"}}>Login</Link>
            <Link to="/addUser">create</Link>
        </>
    )
}

export default Menu;

